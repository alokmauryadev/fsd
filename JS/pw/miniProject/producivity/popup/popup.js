class PopupUI {
    constructor() {
        this.blockListEl = document.getElementById("blocked-website-list");
        this.usageListEl = document.getElementById("usage-list");
        this.pomodoroDisplay = document.getElementById("timer-display");
        this.durationInput = document.getElementById("duration");
        this.blockInput = document.getElementById("siteURL");
        this.addBlockBtn = document.getElementById("block-add-btn");
        this.startBtn = document.getElementById("timer-start");
        this.stopBtn = document.getElementById("timer-stop");

        this.init();
        this.bindEvents();
    }

    init() {
        const updateUI = async () => {
            const data = await chrome.storage.local.get(["siteUsage", "blockedSitesKey", "pomodoroTime"]);
            this.renderBlockList(data.blockedSitesKey || []);
            this.renderUsage(data.siteUsage || {});
            this.updateTimerDisplay(data.pomodoroTime || 0);
        };

        updateUI();
        setInterval(updateUI, 1000);
    }

    bindEvents() {
        this.addBlockBtn.addEventListener('click', () => this.addBlockSite());
        this.startBtn.addEventListener('click', () => this.startPomodoro());
        this.stopBtn.addEventListener('click', () => this.stopPomodoro());
    }

    renderBlockList(list) {
        this.blockListEl.innerHTML = "";
        list.forEach(eItem => {
            const li = document.createElement('li');
            li.textContent = eItem;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "X";
            removeBtn.style.float = "right";
            removeBtn.onclick = () => this.removeSite(eItem);
            li.appendChild(removeBtn);
            this.blockListEl.appendChild(li);
        });
    }

    renderUsage(usage) {
        this.usageListEl.innerHTML = "";
        Object.entries(usage).forEach(([site, seconds]) => {
            const li = document.createElement("li");
            const minutes = Math.floor(seconds / 60);
            li.innerText = `${site}: ${minutes}m ${seconds % 60}s`;
            this.usageListEl.appendChild(li);
        });
    }

    addBlockSite() {
        const raw = this.blockInput.value.trim();
        if (!raw) return;
        let host = raw;
        try {
            // Handle cases where user enters just "google.com" or "https://google.com"
            if (!raw.startsWith('http')) {
                host = new URL("https://" + raw).hostname;
            } else {
                host = new URL(raw).hostname;
            }
        } catch (e) {
            console.error("Invalid URL");
        }

        chrome.runtime.sendMessage({ action: "ADD_BLOCK", site: host }, () => {
            this.blockInput.value = '';
        });
    }

    removeSite(site) {
        chrome.runtime.sendMessage({ action: "REMOVE_BLOCK", site });
    }

    startPomodoro() {
        const minutes = parseInt(this.durationInput.value, 10);
        if (minutes > 0) {
            chrome.runtime.sendMessage({ action: "START_POMODORO", minutes });
        }
    }

    stopPomodoro() {
        chrome.runtime.sendMessage({ action: "STOP_POMODORO" });
    }

    updateTimerDisplay(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        this.pomodoroDisplay.textContent = `Time Left: ${mins}:${secs.toString().padStart(2, "0")}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PopupUI();
});
