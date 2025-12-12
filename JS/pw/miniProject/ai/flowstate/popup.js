// --- DOM Elements ---
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const circle = document.querySelector('.progress-ring__circle');
const siteInput = document.getElementById('siteInput');
const addSiteBtn = document.getElementById('addSiteBtn');
const blockedList = document.getElementById('blockedList');
const statusBadge = document.getElementById('statusBadge');
const statsList = document.getElementById('statsList');

// --- Constants ---
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = 0;

// --- State ---
let timerInterval;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    renderBlockedSites();
    renderStats();
    
    // Check if timer is running from background
    chrome.runtime.sendMessage({ cmd: 'GET_STATUS' }, (response) => {
        if (response.isRunning) {
            startTimerUI();
        }
    });
});

// --- Tab Switching ---
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// --- Timer Logic ---
function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

function updateTimerDisplay(totalSeconds, timeLeft) {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    minutesEl.textContent = mins < 10 ? '0' + mins : mins;
    secondsEl.textContent = secs < 10 ? '0' + secs : secs;
    
    const percent = (timeLeft / totalSeconds) * 100; // 25 mins in seconds
    setProgress(percent);
}

function startTimerUI() {
    startBtn.textContent = 'Pause';
    startBtn.classList.replace('primary-btn', 'secondary-btn'); // visual toggle
    statusBadge.textContent = "Focusing";
    statusBadge.style.color = "#4ade80";
    statusBadge.style.background = "rgba(74, 222, 128, 0.1)";
    
    timerInterval = setInterval(() => {
        chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, (response) => {
            if (response.timeLeft <= 0) {
                resetTimerUI();
            } else {
                updateTimerDisplay(1500, response.timeLeft);
            }
        });
    }, 1000);
}

function resetTimerUI() {
    clearInterval(timerInterval);
    startBtn.textContent = 'Start Focus';
    startBtn.classList.replace('secondary-btn', 'primary-btn');
    statusBadge.textContent = "Idle";
    statusBadge.style.color = "#6366f1";
    statusBadge.style.background = "rgba(99, 102, 241, 0.1)";
    updateTimerDisplay(1500, 1500);
}

startBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ cmd: 'TOGGLE_TIMER' }, (response) => {
        if (response.isRunning) startTimerUI();
        else resetTimerUI();
    });
});

resetBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ cmd: 'RESET_TIMER' });
    resetTimerUI();
});

// --- Blocker Logic ---
function renderBlockedSites() {
    chrome.storage.local.get(['blockedSites'], (result) => {
        const sites = result.blockedSites || [];
        blockedList.innerHTML = '';
        sites.forEach(site => {
            const li = document.createElement('li');
            li.className = 'site-item';
            li.innerHTML = `<span>${site}</span> <button class="delete-btn" onclick="removeSite('${site}')">&times;</button>`;
            // Event delegation handled below for simplicity in this snippet context
            li.querySelector('.delete-btn').addEventListener('click', () => removeSite(site));
            blockedList.appendChild(li);
        });
    });
}

addSiteBtn.addEventListener('click', () => {
    const site = siteInput.value.trim();
    if (site) {
        chrome.storage.local.get(['blockedSites'], (result) => {
            const sites = result.blockedSites || [];
            if (!sites.includes(site)) {
                sites.push(site);
                chrome.storage.local.set({ blockedSites: sites }, () => {
                    siteInput.value = '';
                    renderBlockedSites();
                });
            }
        });
    }
});

function removeSite(site) {
    chrome.storage.local.get(['blockedSites'], (result) => {
        const sites = result.blockedSites.filter(s => s !== site);
        chrome.storage.local.set({ blockedSites: sites }, renderBlockedSites);
    });
}

// --- Stats Logic ---
function renderStats() {
    chrome.storage.local.get(['stats'], (result) => {
        const stats = result.stats || {};
        const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1]).slice(0, 5); // Top 5
        
        if (sorted.length === 0) return;

        statsList.innerHTML = '';
        const maxVal = sorted[0][1]; // For bar scaling

        sorted.forEach(([site, seconds]) => {
            const mins = Math.floor(seconds / 60);
            const percent = (seconds / maxVal) * 100;
            
            const div = document.createElement('div');
            div.className = 'stat-item';
            div.innerHTML = `
                <div class="stat-label">
                    <span>${site}</span>
                    <span>${mins} m</span>
                </div>
                <div class="stat-bar-bg">
                    <div class="stat-bar-fill" style="width: ${percent}%"></div>
                </div>
            `;
            statsList.appendChild(div);
        });
    });
}

function updateUI() {
    // Initial fetch to sync UI
    chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, (res) => {
        updateTimerDisplay(1500, res.timeLeft);
    });
}