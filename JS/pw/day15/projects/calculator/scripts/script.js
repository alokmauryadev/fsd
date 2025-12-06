let numbers = document.querySelector(".numbers")
let answerText = document.querySelector(".answertext")
let operators = document.querySelector(".operators")

numbers.addEventListener("click",(event)=>{
    if(event.target != event.currentTarget){
        let currentNum = event.target
        if(currentNum.textContent === "AC"){
            answerText.textContent = 0;
        }
         else if(currentNum.textContent === "="){
            let toCalc = answerText.textContent
            answerText.textContent = calc(toCalc)
         }
         else{
            if(answerText.textContent === "0"){
                answerText.textContent = ""
            }
      answerText.textContent += currentNum.textContent
         }
    }
})

function calc(str) {
    str = str.replace(/(\d+)%(\d+)/g, (_, a, b) => `(${a}*${b}/100)`);
    str = str.replace(/(\d+)%(\D|$)/g, (_, n, nonDigit) => `(${n}/100)${nonDigit}`);
    return Function(`return ${str}`)();
}