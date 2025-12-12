// Check status immediately
function checkStatus() {
    chrome.runtime.sendMessage({ cmd: 'GET_STATUS' }, (response) => {
        if (response && response.isRunning) {
            checkIfBlocked();
        }
    });
}

function checkIfBlocked() {
    const currentHost = window.location.hostname;
    
    chrome.storage.local.get(['blockedSites'], (result) => {
        const blockedSites = result.blockedSites || [];
        
        // Simple string matching (can be improved with regex)
        const isBlocked = blockedSites.some(site => currentHost.includes(site));

        if (isBlocked) {
            blockPage();
        }
    });
}

function blockPage() {
    // Only block if not already blocked
    if (document.getElementById('flowstate-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'flowstate-overlay';
    overlay.innerHTML = `
        <div class="msg-container">
            <h1>FlowState Active</h1>
            <p>This site is blocked while you focus.</p>
            <div class="pulse-circle"></div>
        </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Run on load
checkStatus();

// Listen for timer start/stop to dynamically block/unblock without reload
setInterval(checkStatus, 2000); // Poll every 2 seconds for status changes