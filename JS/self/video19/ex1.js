function generateColorValue(){
let max = 256;
let colorvalue = Math.floor(Math.random()*(max))

return colorvalue
}
function generateColor(){
let color = (`rgb(${generateColorValue()}, ${generateColorValue()}, ${generateColorValue()})`)
return color;
}


function colorbox(){
    let box = document.querySelectorAll(".box")
    box.forEach(e => {
        e.style.backgroundColor = generateColor();
        e.style.color = generateColor();
    });
}
colorbox();


console.log(color)