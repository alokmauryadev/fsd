try{
    importScripts("utils.js")
}catch(e){
    console.log(e)
}

const USAGE_KEY = "siteUsageData"
const BLOCK_KEY = "blockedSites"

class PomodoroManager{
    // save target time and status
    async startTimer(minutes){
        const duration = minutes*60*1000
        const targetTime = Date.now()+duration
        await StorageService.save("timerTarget",targetTime)
        await StorageService.save("timerStatus","running")
        
        chrome.alarms.create("POMODORO_ALARM",{when: targetTime})
        console.log("Timer Started")

    }
    async stopTimer(){
        chrome.alarms.clear("POMODORO_ALARM")
        await StorageService.save("timerTarget",null)
        await StorageService.save("timerStatus","stopped")
    }
    // start the timer
    // creating an alert
    // passing the message when recieved from handleStart
    // sending the notification
    // deleting the alert
}

class UsageTracker{
    constructor(){
        this.usage = {}
        this.lastActiveUrl = null;
        this.lastActiveTime = null;
        this.init();
        this.interval = null;
    }

    async init(){
        this.usage = await StorageService.get(USAGE_KEY) || {}
        
        chrome.tabs.onActivated.addListener(activeInfo=>this.handleTabChange(activeInfo.tabId));
        chrome.windows.onFocusChanged.addListener(windowId => this.handleWidnowChange(windowId));
        this.findActiveTab();
    }
    async trackAndReset(){
        if(!this.lastActiveUrl || !this.lastActiveTime){
            return;
        }
        const timeElapsedMS = Date.now() - this.lastActiveTime;
        const timeElapsedSeconds = Math.floor(timeElapsedMS/1000);
        this.usage[this.lastActiveUrl] = (this.usage[this.lastActiveUrl] || 0) + timeElapsedSeconds;
        await StorageService.save(USAGE_KEY,this.usage);

        this.lastActiveUrl = null;
        this.lastActiveTime = null;
        clearInterval(this.interval)
        this.interval = null
    }
    
    async startTracking(hostname){
       await this.trackAndReset();
        this.lastActiveUrl = hostname;
        this.lastActiveTime = Date.now();
        console.log(`Tracking started for: ${this.lastActiveUrl}`)
    }
    async consoleData(){
        console.log("Function called")
        this.interval = setInterval(()=>{
            console.log(this.lastActiveUrl,Math.floor(this.lastActiveTime/(1000*60)),Math.floor(this.lastActiveTime/1000)%60)
        },1000)
    }
    async findActiveTab(){
        try{
            const [tab] = await chrome.tabs.query({active: true,currentWindow:true})
  
        if (tab&& tab.url){
            this.updateActiveUrl(tab.url)
        } else{
            this.trackAndReset()
        }}
catch(e){
            console.log(e)
        }
    }
    async handleTabChange(tabId){
        try{
            const tab = await chrome.tabs.get(tabId);
            this.updateActiveUrl(tab.url);
        } catch (e){
            this.trackAndReset();
        }
    }
    handleWidnowChange(windowId){
        if(windowId === chrome.windows.WINDOW_ID_NONE){
            this.trackAndReset();
        } else{
            this.findActiveTab();
        }
    }
    async getUsageData(){
        await this.trackAndReset();
        await this.findActiveTab();
        return this.usage;
    }
updateActiveUrl(url) {
    if (!url || url.startsWith("chrome://")) {
        this.trackAndReset();
        return;
    }

    const hostname = new URL(url).hostname;
    try{

  
    // Only process when the URL actually changes
    if (hostname !== this.lastActiveUrl) {
        this.startTracking(hostname)
    }  } catch(e){
        console.error("Invalid URL: ",url)
    }
}

}
const usageTracker = new UsageTracker();

chrome.runtime.onSuspend.addListener(() => {
    usageTracker.trackAndReset(); 
});
const manager = new PomodoroManager();

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request.cmd === "START_TIMER"){
        manager.startTimer(request.minutes).then( async ()=>{
            const target = await StorageService.get("timerTarget");
            sendResponse({target})
        })
        return true
    }
    if(request.cmd === "STOP_TIMER"){
        manager.stopTimer()
    }
    if(request.cmd === "GET_USAGE_STATS"){
        usageTracker.getUsageData().then(data=>{
            console.log(data)
            sendResponse({data})
        });
        return true
    }
})

chrome.alarms.onAlarm.addListener((alarm)=>{
    if(alarm.name==="POMODORO_ALARM"){
        chrome.notifications.create({
            type:"basic",
            iconUrl: "icons/icon.png",
            title: "Time's Up!",
            message: "Focus session complete."
        })
        StorageService.save("timerTarget",null)
        StorageService.save("timerStatus","finished")
    }
})

// class WebsiteBlocker{
//     constructor(){
//         this.blockSites = StorageService.get(BLOCK_KEY)
//     }
//     applyBlocking(){
//         this.blockSites.forEach((site)=>{
//         })
//     }
// }