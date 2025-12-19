(async function (){
    const result = await chrome.storage.local.get(["blockedSites"]);
    const blockedSites = result.blockedSites || [];
    console.log(blockedSites)
    const currentHost = window.location.hostname.toLowerCase();
    console.log(currentHost)
    const isBlocked = blockedSites.some(site=> currentHost.includes(site.domain.toLowerCase()));
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