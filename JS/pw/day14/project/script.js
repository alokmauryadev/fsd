let gridContainer = document.querySelector(".grid-container");
let color = document.getElementById("color-picker")
let gridSize = document.getElementById("grid-size")
let clearBtn = document.getElementById("clear-btn")
let resize = document.getElementById("resize")
let size = gridSize.value
gridSize.value = 16;
function createGrid(size) {
    gridContainer.innerHTML = ""
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "grid-child";
            gridContainer.appendChild(cell);
        }
    }
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
}
createGrid(gridSize.value);
resize.addEventListener("click",()=>{
    createGrid(parseInt(gridSize.value))
});



let isMouseDown = false;

gridContainer.addEventListener("mousedown", function(event) {
    isMouseDown = true;
    colorChild(event);
});

document.addEventListener("mouseup", function() {
    isMouseDown = false;
});

gridContainer.addEventListener("mousemove", function(event) {
    if (isMouseDown) {
        colorChild(event);
    }
});

function hexToRgb(hex) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse r, g, b values from hex
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Return formatted string
  return `rgb(${r},${g},${b})`;
}

// Example usage:
// console.log(hexToRgb('#000000')); // Output: rgb(0,0,0)


function colorChild(event) {
    const rgbValue = hexToRgb(color.value);
    if (event.target !== event.currentTarget) {
        // If the value in the color input is "transparent", set background to transparent
        if (color.value === "transparent") {
            event.target.style.background = "transparent";
        } else if (!event.target.style.background || event.target.style.background !== rgbValue) {
            event.target.style.background = rgbValue; // Paint cell
        } else {
            event.target.style.background = "transparent"; // Reset cell on second hover/click
        }
    }
}



function clearCanvas(){

    document.querySelectorAll(".grid-child").forEach((e)=>{
    e.style.background = "transparent"
})
}
clearBtn.addEventListener("click",clearCanvas)

