class TimerUI{
    constructor(){
        this.timeDisplay = document.getElementById("timeleft")
        this.startBtn = document.getElementById("start-timer")
        this.stopBtn = document.getElementById("stop-timer");
        this.input = document.getElementById("duration")
        this.intervalId = null;
        this.targetTime = null

        this.startBtn.addEventListener("click",()=>this.handleStart());
        this.stopBtn.addEventListener("click",()=> this.handleStop());

        this.syncState();
    }
handleStart(){
    const minutes = parseInt(this.input.value);
    if (isNaN(minutes)) return;

    chrome.runtime.sendMessage({ cmd: "START_TIMER", minutes },(response)=>{
        if (!response || !response.target) return;
        this.targetTime = response.target;
        this.updateDOM(this.targetTime - Date.now());
        this.startTicking();
    });
}
handleStop(){
    chrome.runtime.sendMessage({ cmd: "STOP_TIMER" });
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.targetTime = null;
    this.timeDisplay.innerText = "Stopped";
}

async syncState(){
    const targetTime = await StorageService.get("timerTarget");
    const status = await StorageService.get("timerStatus");

    if (!targetTime || status !== "running") {
        this.timeDisplay.innerText = "00:00";
        return;
    }

    this.targetTime = targetTime;
    const left = targetTime - Date.now();

    if (left <= 0) {
        this.timeDisplay.innerText = "00:00";
        return;
    }

    this.updateDOM(left);
    this.startTicking();
}

    startTicking(){
        if (this.intervalId) return;

            this.intervalId = setInterval(async ()=>{
        // const targetTime = await StorageService.get("timerTarget")
    
        if(!this.targetTime){
            clearInterval(this.intervalId);
            return;
        }
        const now = Date.now();
        const left = this.targetTime - now;
        if (left <=0){
            this.timeDisplay.innerText = "00:00";
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        else{
            this.updateDOM(left);
        }
    },1000);
    }
    updateDOM(ms){
        const totalSeconds = Math.ceil(ms/1000);
        const m = Math.floor(totalSeconds/60)
        const s = totalSeconds % 60;
        this.timeDisplay.innerText = `${m}:${s.toString().padStart(2,'0')}`
    }
}

new TimerUI();