// background.js
// Module style, class-based. Runs as MV3 service worker.

const STORAGE_KEYS = {
  USAGE: "pp_usage",
  BLOCKED: "pp_blocked_sites",
  TIMERS: "pp_timers" // store current timer state
};

class StorageService {
  static async get(key) {
    const res = await chrome.storage.local.get(key);
    return res[key];
  }
  static async set(obj) {
    return chrome.storage.local.set(obj);
  }
  static async remove(key) {
    return chrome.storage.local.remove(key);
  }
}

class Blocker {
  // Manage declarativeNetRequest dynamic rules
  static async init() {
    const sites = await StorageService.get(STORAGE_KEYS.BLOCKED) || [];
    await this._rebuildRules(sites);
  }

  static _domainToFilter(domain) {
    // Convert e.g. "example.com" -> "||example.com^"
    let d = domain.trim();
    if (!d) return null;
    // remove protocol if present
    d = d.replace(/^https?:\/\//, "").replace(/^www\./,'');
    return `||${d}^`;
  }

  static async _rebuildRules(sites) {
    // Remove all existing dynamic rules and add new ones for 'sites'
    const existing = await chrome.declarativeNetRequest.getDynamicRules();
    const removeIds = existing.map(r => r.id);
    if (removeIds.length) {
      await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: removeIds });
    }

    const addRules = [];
    let idBase = 1000;
    for (const s of sites) {
      const filter = this._domainToFilter(s);
      if (!filter) continue;
      addRules.push({
        id: idBase++,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: filter,
          resourceTypes: ["main_frame"]
        }
      });
    }
    if (addRules.length) {
      await chrome.declarativeNetRequest.updateDynamicRules({ addRules });
    }
  }

  static async getBlocked() {
    return (await StorageService.get(STORAGE_KEYS.BLOCKED)) || [];
  }

  static async addSite(domain) {
    const sites = await this.getBlocked();
    if (!sites.includes(domain)) {
      sites.push(domain);
      await StorageService.set({ [STORAGE_KEYS.BLOCKED]: sites });
      await this._rebuildRules(sites);
    }
    return sites;
  }

  static async removeSite(domain) {
    let sites = await this.getBlocked();
    sites = sites.filter(s => s !== domain);
    await StorageService.set({ [STORAGE_KEYS.BLOCKED]: sites });
    await this._rebuildRules(sites);
    return sites;
  }
}

class UsageTracker {
  // Tracks time spent on active tab domains
  constructor() {
    this.usage = {}; // domain -> ms
    this.lastActiveInfo = { tabId: null, domain: null, since: null };
    this._initListeners();
    this._load();
  }

  async _load() {
    this.usage = (await StorageService.get(STORAGE_KEYS.USAGE)) || {};
  }

  async _save() {
    await StorageService.set({ [STORAGE_KEYS.USAGE]: this.usage });
  }

  _domainFromUrl(url) {
    try {
      const u = new URL(url);
      return u.hostname.replace(/^www\./,'');
    } catch (e) {
      return null;
    }
  }

  _now() { return Date.now(); }

  _recordDelta(deltaMs) {
    const domain = this.lastActiveInfo.domain;
    if (!domain || deltaMs <= 0) return;
    this.usage[domain] = (this.usage[domain] || 0) + deltaMs;
    // periodically save
    this._save();
  }

  _handleFocusChange(activeDetails) {
    // When focus changes or active tab changes, compute delta for previous active
    const now = this._now();
    if (this.lastActiveInfo.since) {
      const delta = now - this.lastActiveInfo.since;
      this._recordDelta(delta);
    }
    // set new active info
    this.lastActiveInfo = {
      tabId: activeDetails.tabId || null,
      domain: activeDetails.domain || null,
      since: now
    };
  }

  async _updateActiveTabInfo() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
      if (!tab || !tab.url) {
        this._handleFocusChange({ tabId: null, domain: null });
        return;
      }
      const domain = this._domainFromUrl(tab.url);
      this._handleFocusChange({ tabId: tab.id, domain });
    } catch (e) {
      console.error("UsageTracker update active tab failed", e);
    }
  }

  _initListeners() {
    chrome.tabs.onActivated.addListener(() => this._updateActiveTabInfo());
    chrome.windows.onFocusChanged.addListener(() => this._updateActiveTabInfo());
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      // if the active tab changes url (navigation), update domain
      this._updateActiveTabInfo();
    });

    // If the worker wakes up, refresh active tab info.
    chrome.runtime.onStartup?.addListener?.(() => this._updateActiveTabInfo());
    chrome.runtime.onInstalled?.addListener?.(() => this._updateActiveTabInfo());
  }

  async getTopDomains(limit = 10) {
    await this._load();
    const entries = Object.entries(this.usage);
    entries.sort((a,b) => b[1] - a[1]);
    return entries.slice(0, limit).map(([domain, ms]) => ({ domain, ms }));
  }

  // for external use: reset usage
  async reset() {
    this.usage = {};
    await StorageService.set({ [STORAGE_KEYS.USAGE]: {} });
  }
}

class TimerManager {
  // Manage Pomodoro timers. Timers persisted by storing target timestamps + meta.
  static async init() {
    // ensure timers object exists
    const existing = await StorageService.get(STORAGE_KEYS.TIMERS);
    if (!existing) {
      await StorageService.set({ [STORAGE_KEYS.TIMERS]: {} });
    }
    // Listen for alarm events
    chrome.alarms.onAlarm.addListener(async alarm => {
      if (alarm && alarm.name && alarm.name.startsWith("timer-")) {
        const id = alarm.name.replace("timer-","");
        await this._onTimerFinish(id);
      }
    });
  }

  static async startTimer(id, durationMs, label = "Pomodoro") {
    // id: string unique id
    // store timer info and create alarm
    const now = Date.now();
    const target = now + durationMs;
    const data = (await StorageService.get(STORAGE_KEYS.TIMERS)) || {};
    data[id] = { id, label, startedAt: now, target, durationMs, paused: false };
    await StorageService.set({ [STORAGE_KEYS.TIMERS]: data });

    // create an alarm set to when the timer ends
    await chrome.alarms.create(`timer-${id}`, { when: target });
    // notify popup about state change
    chrome.runtime.sendMessage({ action: "TIMER_STARTED", timer: data[id] });
    return data[id];
  }

  static async stopTimer(id) {
    const data = (await StorageService.get(STORAGE_KEYS.TIMERS)) || {};
    if (data[id]) {
      delete data[id];
      await StorageService.set({ [STORAGE_KEYS.TIMERS]: data });
    }
    await chrome.alarms.clear(`timer-${id}`);
    chrome.runtime.sendMessage({ action: "TIMER_STOPPED", id });
  }

  static async pauseTimer(id) {
    const data = (await StorageService.get(STORAGE_KEYS.TIMERS)) || {};
    if (!data[id] || data[id].paused) return;
    const now = Date.now();
    const remaining = data[id].target - now;
    data[id].paused = true;
    data[id].remainingOnPause = remaining;
    await StorageService.set({ [STORAGE_KEYS.TIMERS]: data });
    await chrome.alarms.clear(`timer-${id}`);
    chrome.runtime.sendMessage({ action: "TIMER_PAUSED", id });
  }

  static async resumeTimer(id) {
    const data = (await StorageService.get(STORAGE_KEYS.TIMERS)) || {};
    if (!data[id] || !data[id].paused) return;
    const now = Date.now();
    const target = now + data[id].remainingOnPause;
    data[id].paused = false;
    data[id].target = target;
    delete data[id].remainingOnPause;
    await StorageService.set({ [STORAGE_KEYS.TIMERS]: data });
    await chrome.alarms.create(`timer-${id}`, { when: target });
    chrome.runtime.sendMessage({ action: "TIMER_RESUMED", id, timer: data[id] });
  }

  static async getTimers() {
    const data = (await StorageService.get(STORAGE_KEYS.TIMERS)) || {};
    return data;
  }

  static async _onTimerFinish(id) {
    const data = (await StorageService.get(STORAGE_KEYS.TIMERS)) || {};
    const t = data[id];
    if (!t) return;
    // send notification
    chrome.notifications.create(`pomodoro-${id}`, {
      type: "basic",
      iconUrl: "icons/icon128.jpg",
      title: "Pomodoro Complete",
      message: `${t.label} finished! Take a break — or start next session.`,
      priority: 2
    });
    // remove timer
    delete data[id];
    await StorageService.set({ [STORAGE_KEYS.TIMERS]: data });
    // notify UI
    chrome.runtime.sendMessage({ action: "TIMER_FINISHED", id });
  }
}

// Initialize services when worker starts
(async function initAll(){
  await Blocker.init();
  await TimerManager.init();
  // instantiate usage tracker as a long-lived object (it sets listeners)
  const usageTracker = new UsageTracker();
  // update initial active tab
  await usageTracker._updateActiveTabInfo();
  // Expose some message handlers
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    (async ()=>{
      try {
        switch(msg.cmd) {
          case "BLOCK_ADD":
            {
              const sites = await Blocker.addSite(msg.domain);
              sendResponse({ success: true, sites });
            }
            break;
          case "BLOCK_REMOVE":
            {
              const sites = await Blocker.removeSite(msg.domain);
              sendResponse({ success: true, sites });
            }
            break;
          case "GET_BLOCKED":
            {
              const sites = await Blocker.getBlocked();
              sendResponse({ success: true, sites });
            }
            break;
          case "GET_USAGE":
            {
              const top = await usageTracker.getTopDomains(20);
              sendResponse({ success: true, top });
            }
            break;
          case "USAGE_RESET":
            {
              await usageTracker.reset();
              sendResponse({ success: true });
            }
            break;
          case "TIMER_START":
            {
              const timer = await TimerManager.startTimer(msg.id, msg.durationMs, msg.label);
              sendResponse({ success: true, timer });
            }
            break;
          case "TIMER_STOP":
            {
              await TimerManager.stopTimer(msg.id);
              sendResponse({ success: true });
            }
          case "TIMER_PAUSE":
            {
              await TimerManager.pauseTimer(msg.id);
              sendResponse({ success: true });
            }
            break;
          case "TIMER_RESUME":
            {
              await TimerManager.resumeTimer(msg.id);
              sendResponse({ success: true });
            }
            break;
          case "GET_TIMERS":
            {
              const timers = await TimerManager.getTimers();
              sendResponse({ success: true, timers });
            }
            break;
          default:
            sendResponse({ success: false, msg: "unknown_cmd" });
        }
      } catch (e) {
        console.error("background message handler error", e);
        sendResponse({ success: false, error: e?.message || String(e) });
      }
    })();
    // indicate async response
    return true;
  });
})();
