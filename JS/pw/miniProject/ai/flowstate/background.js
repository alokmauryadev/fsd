let timeLeft = 1500; // 25 minutes
let isRunning = false;
let timerInterval = null;

// --- Timer Logic ---
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 1500;
            // Notification
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icons/icon48.png',
                title: 'FlowState',
                message: 'Focus session complete! Take a break.'
            });
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

// --- Message Handling ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'TOGGLE_TIMER') {
        if (isRunning) stopTimer();
        else startTimer();
        sendResponse({ isRunning });
    } else if (request.cmd === 'GET_TIME') {
        sendResponse({ timeLeft });
    } else if (request.cmd === 'GET_STATUS') {
        sendResponse({ isRunning });
    } else if (request.cmd === 'RESET_TIMER') {
        stopTimer();
        timeLeft = 1500;
    }
    return true;
});

// --- Usage Tracking Logic ---
let activeTabId = null;
let activeDomain = null;
let startTime = null;

function updateStats() {
    if (activeDomain && startTime) {
        const duration = (Date.now() - startTime) / 1000; // seconds
        chrome.storage.local.get(['stats'], (result) => {
            const stats = result.stats || {};
            stats[activeDomain] = (stats[activeDomain] || 0) + duration;
            chrome.storage.local.set({ stats });
        });
    }
}

function handleTabChange(tabId) {
    updateStats(); // Save previous
    chrome.tabs.get(tabId, (tab) => {
        if (chrome.runtime.lastError || !tab || !tab.url) return;
        try {
            const url = new URL(tab.url);
            if (url.protocol.startsWith('http')) {
                activeDomain = url.hostname;
                startTime = Date.now();
                activeTabId = tabId;
            } else {
                activeDomain = null;
            }
        } catch (e) { activeDomain = null; }
    });
}

chrome.tabs.onActivated.addListener((info) => handleTabChange(info.tabId));
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tabId === activeTabId && changeInfo.url) handleTabChange(tabId);
});