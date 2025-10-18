/*
create a business name generator by combining list of adjectives and shop name and another word

adjectives:
crazy
amazing 
fire

Shop name:

Engine
Foods
Garments

Another Word:

Bros
Limited
Hub
*/

const random = function(){ 
    return Math.floor(Math.random() * 3);}
// console.log(random)
let adjectives = "Crazy Amazing Fire"

let shop = "Engine Foods Garments"

let word = "Bros Limited Hub"

// console.log(word.slice(2))
const new_name = function(){
   return (`${adjectives.split(' ')[random()]} ${shop.split(' ')[random()]} ${word.split(' ')[random()]}`);
}
console.log(new_name())