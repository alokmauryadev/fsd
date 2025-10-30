function createToaster(config){
        let parent = document.createElement("div");
parent.className = "fixed p-5 flex flex-col gap-5";
// Add an id if you want to target it later
parent.id = "toaster-parent";
// Append parent to body only if not already in the DOM
const cnt = document.querySelector(".container")
if (!document.getElementById("toaster-parent")) {
    cnt.appendChild(parent);
}
    return function(notification){
        let div =  document.createElement("div");
        div.className = `flex items-center ${config.theme === "light"?("bg-gray-100 text-black"):("bg-gray-800 text-white")} border border-gray-300 rounded shadow-lg px-4 py-3  transition-all  ${config.positionX === "right"?"right-10":"left-10"} ${config.positionY === "top"?"top-10":"bottom-10"}`;
        div.innerHTML += `<svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>`
div.textContent = notification
parent.append(div)
setTimeout(()=>{
    parent.removeChild(div)
},config.duraton * 1000)
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duraton: 3,
});

toaster("This is a dummy notification");
setTimeout(() => {
    toaster("Your friend request has been accepted");
}, 2000);