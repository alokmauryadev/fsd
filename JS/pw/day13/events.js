let main = document.querySelector(".main");
let sidebar = document.querySelector(".sidebar")
let btn = document.getElementById("btn")
let userInput = document.getElementById("username")
let span = document.querySelector(".para")
let isCute = true;


// this is one of the way to use javascript event listners
// btn.onclick = () => {
//   if (isCute) {
//     btn.textContent = "Ouch! You are making me tingle";
//   } else {
//     btn.textContent = "I'm cute";
//   }
//   isCute = !isCute; // Toggle the flag
// };
// btn.onmouse

// username.onfocus = () =>{
//     username.setAttribute("placeholder","Enter Your name")
// }
// username.onblur = () =>{
//     username.removeAttribute("placeholder")
// }

// span.onmouseover = function(){
//     console.log("Mouse have hovered")
// }
// span.onmouseleave = function(){
//     console.log("Mouse have left")
// }
// span.onmouseenter = function(){
//     console.log("Mouse have entered")
// }


btn.addEventListener("mouseover",()=>{
    console.log("Did you just hovered over me?")
})
btn.addEventListener("dblclick",()=>{
    console.log("You just double clicked me")
})
span.addEventListener("dblclick",()=>{
    console.log("You just double clicked me," + "I am a delicate span")
})

// username.addEventListener("keypress",(e)=>{
    //     // console.log("A key is clicked")
    //     // console.log(e)
    //     console.log(`${e.key} : is pressed`)
    // })
    
    
    // document.body.addEventListener("keydown",(e)=>{
        //     // console.log("A key is clicked")
        //      console.log(`${e.key} : is down`)
        //     // console.log(e)
        //     if(e.key === "h"){
            //         console.log("You have just pressed a key 'H' ")
            //     }
            // })
            
            
            // username.addEventListener("keyup",(e)=>{
                //     // console.log("A key is clicked")
                //     // console.log(e)
                //     console.log(`${e.key} : is up`)
                // })
                
                
                let spdiv = document.querySelector(".spandiv");
                
                spdiv.addEventListener('mouseenter', () => {
    spdiv.focus(); // Ensures it's focused when mouse is inside
});

spdiv.addEventListener('keydown', (e) => {
    console.log(`${e.key} is pressed`);
});

btn.addEventListener("click",sayHI)
btn.addEventListener("click",()=>{
      if (isCute) {
    btn.textContent = "Ouch! You are making me tingle";
  } else {
    btn.textContent = "I'm cute";
  }
  isCute = !isCute; // Toggle the flag

})
function sayHI(event){
    event.stopImmediatePropagation();
    console.log("Hi there!")
}

