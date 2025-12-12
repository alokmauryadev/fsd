try {
    importScripts('utils.js')
} catch(e){
    console.error(e)
}

class PomodoroManager{
    async startTimer(minutes){
        const durationMS = minutes*60*1000;
        const targetTime = Date.now() + durationMS;
        await StorageService.save("timerTarget",targetTime)
        await StorageService.save("timerStatus","running")
        chrome.alarms.create("pomodoroAlarm",{when: targetTime})
        console.log(`Timer Started for ${minutes} minutes.`);
    }
    async stopTimer(){
        await chrome.alarms.clear("pomodoroAlarm")
        await StorageService.save("timerTarget",null)
        await StorageService.save("timerStatus","stopped");
        console.log("Timer stopped.")
    }
}

const manager = new PomodoroManager();

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request.cmd === "START_TIMER"){
        manager.startTimer(request.minutes).then(async ()=>{
            const target = await StorageService.get("timerTarget");
            sendResponse({target})
        });
        return true
    }
    
    if(request.cmd === "STOP_TIMER"){
        manager.stopTimer();
    }
})

chrome.alarms.onAlarm.addListener((alarm)=>{
    if (alarm.name==="pomodoroAlarm"){
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon.png",
            title: "Time's Up!",
            message: "Focus session complete."
        });

        StorageService.save("timerTarget",null)
        StorageService.save("timerStatus","finished")
    }
})