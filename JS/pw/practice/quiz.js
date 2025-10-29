const question1 = "What is 2 + 6?";
const answer1 = 8;
const question2 = "What is the capital of Japan?";
const answer2 = "tokyo";
const question3 = "Is JavaScript case-sensitive? (yes/no)";
const answer3 = "yes";
// const answers = [8,"tokyo","yes"]
let user_answer = [];
let score = 0
const p1 = prompt(question1)
    user_answer.push(+p1)

const p2 = prompt(question2)

 user_answer.push(p2.toLowerCase())
const p3 = prompt(question3)
 user_answer.push(p3.toLowerCase())
console.log(user_answer)
// for (let i = 0; i < user_answer.length; i++) {
//     if(user_answer[i]===answers[i]){
//         score++
//     }
    
// }

if(+p1===answer1){
    score++
}
if(p2.toLowerCase()===answer2){
    score++
}
if(p3.toLowerCase()===answer3){
    score++
}
alert(`Your total score is ${score}`)