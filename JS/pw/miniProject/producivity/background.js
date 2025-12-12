// storageservice (storage need)
const localStorageKeys = {
    SITE_USAGE:"siteUsage",
    BLOCKED_SITES: "localStorageKeys.BLOCKED_SITES"
}
// const localStorageKeys.BLOCKED_SITES = "BLOCKED_SITES"
class StorageService{
    static async save(key,value){
        await chrome.storage.local.set({[key]: value})
    }
    static async load(key){
        const data = await chrome.storage.local.get([key])
        return data[key] ?? {};

    }
}
// features


class SiteBlocker{
    constructor(){
        this.blockList;
        this.load();
    }
    async load(){
        let blockedList = await StorageService.load(localStorageKeys.BLOCKED_SITES)
        this.blockList = new Set(blockedList)
    }
    async addSite(url){
        if(!this.blockList.has(url)){
            this.blockList.add(url)
            await StorageService.save(localStorageKeys.BLOCKED_SITES,[...this.blockList])
        }
    }
    async removeSite(url){
        if(this.blockList.has(url))
            this.blockList.delete(url)
        await StorageService.save(localStorageKeys.BLOCKED_SITES,[...this.blockList])
        await this.applyBlocking();
    }
    isBlocked(url){
        for(let subURL of this.blockList){
            if(url.toLowerCase().includes(subURL.toLowerCase()))
                return true;
        }
        return false;
    }
    async applyBlocking(){
        const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
        const ruleIdsToRemove = existingRules.map(rule=>rule.id)
        if(ruleIdsToRemove.length>0){
            await chrome.declarativeNetRequest.updateDynamicRule({
                ruleIdsToRemove: ruleIdsToRemove
            });
        }
        const newRules = [...this.blockList].map((site,index)=>{
            return {
                id: index+1,
                priority: 1,
                action: {type: "block"},
                condition:{
                    urlFilter: `*://*.${site}/*`,
                    resourceTypes: ["main_frame","sub_frame","stylesheet","script","image","font","object","xmlhttprequest","ping","media","websocket","webtransport","csp_report","other"]
                }
            }
        });
        if(newRules.length>0){
            await chrome.declarativeNetRequest.updateDynamicRule({
                addRules:newRules
            })
        }
    }
}

class pomodoroManager{
    constructor(){
        this.timeLeft = 0;
        this.interval = null
    }
    
    start(minutes){
        this.timeLeft = minutes*60
         chrome.storage.local.set({pomodoroTime: this.timeLeft})
       this.interval =  setInterval(()=>{
            this.timeLeft--;
            chrome.storage.local.set({pomodoroTime: this.timeLeft})
            if(this.timeLeft<=0){
                this.stop();
                chrome.notifications.create({
                    type: "basic",
                    iconUrl: "./assets/icon128.jpg",
                    title: "Pomodoro Complete",
                    message: "Take a break"
                })
            }
        },1000)
    }

    stop(){
        clearInterval(this.interval)
        this.interval = null;
        this.timeLeft = 0;
    }

}
// siteBlocker

// usageTracker
class usageTracker{
    constructor(){
        this.usage = {}
        init();
    }
    async init(){
        this.usage = await StorageService.load(localStorageKeys.SITE_USAGE);
        chrome.tabs.onActivated.addListener(tabsInfo =>{this.track(tabsInfo)})
    }

    async track(tabsInfo){
        chrome.tabs.get(tabsInfo.tabId,async (tab)=>{
            if(!tab?.url)
                return;
            let hostName = new URL(tab.url).hostname;
            let currentTime = this.usage[hostName] ?? 0;
            this.usage[hostName] = currentTime +1;
            await StorageService.save(localStorageKeys.SITE_USAGE,this.usage)
            
        })

    }
}
// pomodoro Manger

// busineslogic


// singleton desgin pattern