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
        if(isNaN(minutes)) return;
        chrome.runtime.sendMessage({cmd:"START_TIMER",minutes},(response)=>{
            if(!response || !response.target) return;
            this.targetTime = response.target
            this.updateDOM(this.targetTime-Date.now())
            this.syncState()
        })
    }
    handleStop(){
        chrome.runtime.sendMessage({cmd:"STOP_TIMER"})
        clearInterval(this.intervalId)
        this.intervalId = null
        this.targetTime = null
        this.timeDisplay.innerText = "Stopped"

    }
    async syncState(){
        const targetTime = await StorageService.get("timerTarget");
        const status = await StorageService.get("timerStatus")
        
        if(!targetTime || status !== "running"){
            this.timeDisplay.innerText = "00:00";
            return
        }
        this.targetTime = targetTime;
        const left = targetTime-Date.now()

        if(left<=0){
            this.timeDisplay.innerText = "00:00";
            return;

        }
        this.updateDOM(left)
        this.startTicking()
    }
    startTicking(){
        if(this.intervalId) return;
        this.intervalId = setInterval(async ()=>{
            if(!this.targetTime){
                clearInterval(this.intervalId)
                this.intervalId = null;
                return
            }
            const left = this.targetTime - Date.now()
            if(left<=0){
                this.timeDisplay.innerText = "00:00";
                clearInterval(this.intervalId)
                this.intervalId = null
                return
            }
            this.updateDOM(left)
        },1000)
    }
    updateDOM(ms){
        const totalSeconds = Math.ceil(ms/1000)
        const m = Math.floor(totalSeconds/60)
        const s = totalSeconds % 60
        this.timeDisplay.innerText = `${m}:${s.toString().padStart(2,0)}`
    }
}
class UsageUI{
    constructor(){
        console.log("USAGE UI CONSTRUCTOR CALLED")
        this.listContainer = document.querySelector("#usage-history ul");
        this.render();
    }
    async render(){
        const response = await chrome.runtime.sendMessage({cmd:"GET_USAGE_STATS"});
        const usageData = response || {}
        console.log(usageData)

        this.listContainer.innerHTML = "";
        const sortedSites = Object.entries(usageData["data"]).sort((a,b)=>b[1]-a[1])
        console.log(sortedSites)

        if(sortedSites.length===0){
            this.listContainer.innerHTML = "<li class=`empty`>No data yet</>"
            return
        }
        sortedSites.forEach(([hostName,seconds])=>{
            const timeString = this.formatTime(seconds);
            const li = document.createElement("li");
            const siteSpan = document.createElement("span");
            siteSpan.textContent = hostName;
            const timeSpan = document.createElement("span")
            timeSpan.className = "usage-time";
            timeSpan.textContent = timeString;
            li.appendChild(siteSpan)
            li.appendChild(timeSpan)
            this.listContainer.appendChild(li)
        });
    }
    formatTime(totalSeconds){
        if (totalSeconds<60) return `${totalSeconds}`;
        const m = Math.floor(totalSeconds/60)
        const s = totalSeconds % 60;
        return `${m}m ${s}s`
    }
}
class BlockerUI{
    constructor(){
        this.input = document.getElementById("site-name");
        this.addBtn = document.getElementById('addSite');
        this.list = document.querySelector("#blocked-sites-list ul");
        this.addBtn.addEventListener("click",()=>this.addSite());
        this.list.addEventListener("click",(e)=>{
            if(e.target.classList.contains("deleteSite")){
                this.removeSite(e.target.dataset.site)
            }
        });
        this.render();
    }

    async render(){
        const blockedSites = await StorageService.get("blockedSites") || [];
        this.list.innerHTML = "";
        blockedSites.forEach(site=>{
            const li = document.createElement('li');
            li.innerHTML = `
            <span>${site}</span>
            <span class="deleteSite" data-site="${site}">X</span>`;
            this.list.append(li)
        })
    }
    async addSite(){
        const site = this.input.value.trim().toLowerCase();
        if (!site) return;
        const blockedSites = await StorageService.get("blockedSites") || [];
        if(!blockedSites.includes(site)){
            blockedSites.push(site);
            await StorageService.save("blockedSites",blockedSites)
        }
        this.input.value = "";
        this.render();
    }
    async removeSite(siteToRemove){
        let blockedSites = await StorageService.get("blockedSites") || [];
        blockedSites = blockedSites.filter(site=> site !==siteToRemove);
        await StorageService.save("blockedSites",blockedSites);
        this.render();
    }
}
new TimerUI();
new UsageUI();
new BlockerUI();