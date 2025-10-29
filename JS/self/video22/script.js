let button = document.querySelector(".btn");
button.addEventListener("contextmenu",()=>{
    alert(`${button.textContent} is clicked.`)
    document.querySelector(".box").innerHTML = button.nodeName;
})


// there are many type of evens present in js, which I should go through and try to know what type of events are present