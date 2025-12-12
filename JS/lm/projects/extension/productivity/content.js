(async function (){
    console.log("function is called")
    const result = await chrome.storage.local.get(["blockedSites"]);
    const blockedSites = result.blockedSites || [];
    const currentHost = window.location.hostname.toLowerCase();
    const isBlocked = blockedSites.some(site=> currentHost.includes(site));
    if(isBlocked){
        document.documentElement.innerHTML = `<div style="
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ff4d4d;
                color: white;
                font-family: sans-serif;
                font-size: 2rem;
                flex-direction: column;
            ">
                <h1>🚫 Site Blocked 🚫</h1>
                <p>Get back to work.</p>
            </div>
        `;
    }
})();