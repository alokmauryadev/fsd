let iptColor = document.getElementById("color")
let changeColor = document.getElementById("changeColor")
let colorBox = document.querySelector(".colorbox")


function changetheColor(){
    let color = iptColor.value;
    colorBox.style.background = color;
}

iptColor.addEventListener("mousemove",changetheColor)

changeColor.addEventListener("click",changetheColor)