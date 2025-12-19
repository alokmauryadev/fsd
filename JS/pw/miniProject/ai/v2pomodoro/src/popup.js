// popup.js
// Module; class-based UI. Communicates with background via chrome.runtime.sendMessage.

class API {
  static send(msg) {
    return new Promise(resolve => {
      chrome.runtime.sendMessage(msg, res => resolve(res));
    });
  }
}

class PopupUI {
  constructor() {
    // DOM
    this.timerDisplay = document.getElementById("timerDisplay");
    this.startBtn = document.getElementById("startBtn");
    this.pauseBtn = document.getElementById("pauseBtn");
    this.stopBtn = document.getElementById("stopBtn");
    this.presets = Array.from(document.querySelectorAll(".chip"));
    this.topSitesDiv = document.getElementById("topSites");
    this.blockInput = document.getElementById("blockInput");
    this.addBlock = document.getElementById("addBlock");
    this.blockedList = document.getElementById("blockedList");
    this.resetUsage = document.getElementById("resetUsage");
    this.openOptions = document.getElementById("openOptions");

    this.currentTimerId = null;
    this.timerInterval = null;

    this._bind();
    this._init();
  }

  _bind(){
    this.startBtn.addEventListener("click", ()=> this.handleStartDefault());
    this.pauseBtn.addEventListener("click", ()=> this.handlePause());
    this.stopBtn.addEventListener("click", ()=> this.handleStop());
    this.presets.forEach(btn => btn.addEventListener("click", e => {
      const min = parseInt(e.target.dataset.min, 10);
      if (!isNaN(min)) this.startTimerWithMinutes(min);
    }));
    this.addBlock.addEventListener("click", ()=> this.addBlockSite());
    this.resetUsage.addEventListener("click", ()=> this.resetUsageData());
    this.openOptions.addEventListener("click", ()=> {
      chrome.runtime.openOptionsPage();
    });

    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.action === "TIMER_FINISHED") {
        this._clearLocalTimer();
        this.refreshUI();
      }
      if (msg.action === "TIMER_STARTED" || msg.action === "TIMER_RESUMED" || msg.action === "TIMER_PAUSED") {
        this.refreshUI();
      }
    });
  }

  async _init(){
    await this.refreshUI();
    // try to show any running timer
    const res = await API.send({ cmd: "GET_TIMERS" });
    if (res && res.success) {
      const timers = res.timers || {};
      const ids = Object.keys(timers);
      if (ids.length) {
        this.currentTimerId = ids[0];
        this._startLocalTicker();
      } else {
        this._setDisplay(0);
      }
    }
  }

  formatMs(ms) {
    if (ms < 0) ms = 0;
    const s = Math.floor(ms/1000);
    const m = Math.floor(s/60);
    const sec = s % 60;
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  _setDisplay(ms) {
    this.timerDisplay.textContent = this.formatMs(ms);
  }

  _clearLocalTimer() {
    this.currentTimerId = null;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = null;
    this._setDisplay(0);
  }

  async refreshUI() {
    // load top sites
    const usageRes = await API.send({ cmd: "GET_USAGE" });
    if (usageRes && usageRes.success) {
      this._renderTopSites(usageRes.top || []);
    }
    // load blocked
    const blockedRes = await API.send({ cmd: "GET_BLOCKED" });
    if (blockedRes && blockedRes.success) {
      this._renderBlocked(blockedRes.sites || []);
    }
  }

  _renderTopSites(list) {
    this.topSitesDiv.innerHTML = "";
    if (!list.length) {
      this.topSitesDiv.innerHTML = `<div class="row">No recorded activity yet.</div>`;
      return;
    }
    for (const item of list) {
      const el = document.createElement("div");
      el.className = "row";
      const min = Math.round(item.ms / 60000);
      el.innerHTML = `<div>${item.domain}</div><div>${min}m</div>`;
      this.topSitesDiv.appendChild(el);
    }
  }

  _renderBlocked(list) {
    this.blockedList.innerHTML = "";
    if (!list.length) {
      this.blockedList.innerHTML = `<div class="row">No blocked sites</div>`;
      return;
    }
    for (const s of list) {
      const el = document.createElement("div");
      el.className = "row";
      el.innerHTML = `<div>${s}</div><div><button class="btn small unblock" data-site="${s}">Unblock</button></div>`;
      this.blockedList.appendChild(el);
    }
    Array.from(this.blockedList.querySelectorAll(".unblock")).forEach(btn=>{
      btn.addEventListener("click", async e=>{
        const site = e.target.dataset.site;
        await API.send({ cmd: "BLOCK_REMOVE", domain: site });
        await this.refreshUI();
      });
    });
  }

  async addBlockSite() {
    const val = this.blockInput.value.trim();
    if (!val) return;
    await API.send({ cmd: "BLOCK_ADD", domain: val });
    this.blockInput.value = "";
    await this.refreshUI();
  }

  async resetUsageData() {
    await API.send({ cmd: "USAGE_RESET" });
    await this.refreshUI();
  }

  // default: 25 min
  handleStartDefault() { this.startTimerWithMinutes(25); }

  async startTimerWithMinutes(mins) {
    // unique id
    const id = `t-${Date.now()}`;
    const ms = mins * 60 * 1000;
    const label = `${mins} min session`;
    const res = await API.send({ cmd: "TIMER_START", id, durationMs: ms, label });
    if (res && res.success) {
      this.currentTimerId = id;
      this._startLocalTicker();
    }
  }

  async handlePause() {
    if (!this.currentTimerId) return;
    await API.send({ cmd: "TIMER_PAUSE", id: this.currentTimerId });
    // display stays; refreshUI will stop local ticker when background's state is paused
    this._clearLocalTimer();
    await this.refreshUI();
  }

  async handleStop() {
    if (!this.currentTimerId) return;
    await API.send({ cmd: "TIMER_STOP", id: this.currentTimerId });
    this._clearLocalTimer();
    await this.refreshUI();
  }

  _startLocalTicker() {
    // poll timers from background and show remaining
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(async () => {
      const res = await API.send({ cmd: "GET_TIMERS" });
      if (!res || !res.success) return;
      const timers = res.timers || {};
      // if current timer was removed, stop ticker
      if (!Object.keys(timers).length) {
        this._clearLocalTimer();
        return;
      }
      const id = Object.keys(timers)[0];
      const t = timers[id];
      const now = Date.now();
      const remaining = Math.max(0, (t.target || (t.startedAt + t.durationMs)) - now);
      this._setDisplay(remaining);
      // if paused, show remaining stored value
      if (t.paused) {
        this._setDisplay(t.remainingOnPause || 0);
      }
    }, 500); // UI refresh only
  }
}

document.addEventListener("DOMContentLoaded", ()=> new PopupUI());
