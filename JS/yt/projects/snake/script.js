let board = document.querySelector(".board");
let rc =[]
const blocks = [];
const snake = [
    {x:1,y:3},{x:1,y:4},{x:1,y:5}
]

let food = {x:Math.floor(Math.random()*rc[0]),y:Math.floor(Math.random()*rc[1])}

function createDiv() {
    const rows = Math.floor(board.clientHeight / 50);
    const cols = Math.floor(board.clientWidth / 50);

    rc = [rows,cols]

    console.log(rows, cols);

    board.style.gridTemplateColumns = `repeat(${cols}, minmax(30px, 1fr))`;
    board.style.gridTemplateRows = `repeat(${rows}, minmax(30px, 1fr))`;

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < cols; j++) {
            
            let cell = document.createElement("div");
            cell.className = "gridChild";
            blocks[`${i}-${j}`] = cell;
            board.append(cell);
            // cell.textContent = `${i}-${j}`
        }
    }
}
let direction = "down"

createDiv();

console.log(blocks);

function render(){
    snake.forEach(segment=>{
        let cell = blocks[`${segment.x}-${segment.y}`]
        cell.classList.add("fill")
    })
}
render()

let count = 0
let gameStart = setInterval(() => {
    let head = null;

    if(direction === "left"){
        head = { x: snake[0].x, y: snake[0].y - 1 };
    }
    else if(direction === "right"){
        head = { x: snake[0].x, y: snake[0].y + 1 };
    }
    else if(direction === "up"){
        head = { x: snake[0].x - 1, y: snake[0].y };
    }
    else if(direction === "down"){
        head = { x: snake[0].x + 1, y: snake[0].y };
    }

    // boundary check
    if(!(head.x >= 0 && head.x < rc[0] && head.y >= 0 && head.y < rc[1])){
        console.log(head.x, head.y);
        clearInterval(gameStart);
        return;
    }

    // move snake
    snake.unshift(head);   // add new head
    let removed = snake.pop(); // remove tail

    blocks[`${removed.x}-${removed.y}`].classList.remove("fill");

    render();
    count++;
}, 300);


window.addEventListener("keyup", (e) => {
    if(e.key === "ArrowUp" && direction !== "down"){
        direction = "up";
    }
    else if(e.key === "ArrowDown" && direction !== "up"){
        direction = "down";
    }
    else if(e.key === "ArrowLeft" && direction !== "right"){
        direction = "left";
    }
    else if(e.key === "ArrowRight" && direction !== "left"){
        direction = "right";
    }
});
