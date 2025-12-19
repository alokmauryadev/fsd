// storageservice (storage need)
const localStorageKeys = {
    SITE_USAGE: "siteUsage",
    BLOCKED_SITES: "blockedSitesKey"
}

class StorageService {
    static async save(key, value) {
        await chrome.storage.local.set({ [key]: value })
    }
    static async load(key) {
        const data = await chrome.storage.local.get([key])
        return data[key] ?? [];
    }
}

// features
class SiteBlocker {
    constructor() {
        this.blockList;
        this.load();
    }
    async load() {
        let blockedList = await StorageService.load(localStorageKeys.BLOCKED_SITES)
        this.blockList = new Set(blockedList)
    }
    async addSite(url) {
        if (!this.blockList.has(url)) {
            this.blockList.add(url)
            await StorageService.save(localStorageKeys.BLOCKED_SITES, [...this.blockList])
        }
    }
    async removeSite(url) {
        if (this.blockList.has(url))
            this.blockList.delete(url)
        await StorageService.save(localStorageKeys.BLOCKED_SITES, [...this.blockList])
        await this.applyBlocking();
    }
    isBlocked(url) {
        for (let subURL of this.blockList) {
            if (url.toLowerCase().includes(subURL.toLowerCase()))
                return true;
        }
        return false;
    }
    async applyBlocking() {
        const existingRules = await chrome.declarativeNetRequest.getRules();
        const ruleIdsToRemove = existingRules.map(rule => rule.id)
        if (ruleIdsToRemove.length > 0) {
            await chrome.declarativeNetRequest.updateDynamicRule({
                ruleIdsToRemove: ruleIdsToRemove
            });
        }
        const newRules = [...this.blockList].map((site, index) => {
            return {
                id: index + 1,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: `||${site}`,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "media", "websocket", "webtransport", "csp_report", "other"]
                }
            }
        });
        if (newRules.length > 0) {
            await chrome.declarativeNetRequest.updateDynamicRule({
                addRules: newRules
            })
        }
    }
}

class pomodoroManager {
    constructor() {
        this.timeLeft = 0;
        this.interval = null
    }

    start(minutes) {
        this.timeLeft = minutes * 60
        chrome.storage.local.set({ pomodoroTime: this.timeLeft })
        if (this.interval) clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.timeLeft--;
            chrome.storage.local.set({ pomodoroTime: this.timeLeft })
            if (this.timeLeft <= 0) {
                this.stop();
                chrome.notifications.create({
                    type: "basic",
                    iconUrl: "./assets/icon128.jpg",
                    title: "Pomodoro Complete",
                    message: "Take a break"
                })
            }
        }, 1000)
    }

    stop() {
        clearInterval(this.interval)
        this.interval = null;
        this.timeLeft = 0;
        chrome.storage.local.set({ pomodoroTime: 0 })
    }
}

// usageTracker
class usageTracker {
    constructor() {
        this.usage = {}
        this.currentHost = null
        this.init();
        this.interval = null;
    }
    async init() {
        this.usage = await StorageService.load(localStorageKeys.SITE_USAGE);

        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            if (tabs.length && tabs[0].url) {
                this.updateCurrentHost(tabs[0].url)
            }
        })
        chrome.tabs.onActivated.addListener(async (activeInfo) => {
            chrome.tabs.get(activeInfo.tabId, (tab) => {
                this.updateCurrentHost(tab?.url)
            })
        });

        chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
            if (tab.active && changeInfo.url) {
                this.updateCurrentHost(changeInfo.url)
            }
        })
        this.startTimer()
    }

    startTimer() {
        if (this.interval) clearInterval(this.interval);
        setInterval(async () => {
            if (this.currentHost) {
                const currentTime = this.usage[this.currentHost] ?? 0;
                this.usage[this.currentHost] = currentTime + 1;
                await StorageService.save(localStorageKeys.SITE_USAGE, this.usage)
            }
        }, 1000)
    }
    async updateCurrentHost(url) {
        if (!url) return;
        try {
            const host = new URL(url)
            this.currentHost = host.hostname
        } catch (e) {
            this.currentHost = null;
        }
    }
}

// busineslogic
const usageTrackerInstance = new usageTracker();
const blocker = new SiteBlocker();
const pomodoro = new pomodoroManager();


chrome.runtime.onMessage.addListener((msgObj, sender, sendResponse) => {
    // 1. Wrap logic in an async function
    (async () => {
        try {
            switch (msgObj.action) {
                case "ADD_BLOCK":
                    await blocker.addSite(msgObj.site);
                    sendResponse({ success: true });
                    break;

                case "REMOVE_BLOCK":
                    await blocker.removeSite(msgObj.site);
                    sendResponse({ success: true });
                    break;

                case "STOP_POMODORO":
                    pomodoro.stop();
                    sendResponse({ success: true });
                    break;

                case "START_POMODORO":
                    pomodoro.start(msgObj.minutes);
                    sendResponse({ success: true });
                    break;

                default:
                    console.warn(`Unknown action: ${msgObj.action}`);
                    sendResponse({ success: false, error: "Unknown action" });
            }
        } catch (error) {
            console.error("Background script error:", error);
            sendResponse({ success: false, error: error.message });
        }
    })();

    return true;
});