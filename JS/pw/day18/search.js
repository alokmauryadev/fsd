const searchInput = document.getElementById("searchinput");

let timer; // simple timer

searchInput.oninput = () => {
    clearTimeout(timer); // reset previous timer
    console.log(searchInput.value,searchInput.value.length)
    if(searchInput.value.length == 0) return;
    
    timer = setTimeout(() => {
        console.log("Searching", searchInput.value);
    }, 2000); // debounce delay
};
