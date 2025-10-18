console.log("I am tutorial for loops");
// for loop
let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 3; i++) {
   console.log(a+i);
}


let c =0
for (c=0; c<5; c++){
    console.log(c);
}

// for in loop
let obj = {
    name: "alok",
    class: "12th pass",
    cousre: "full stack development"
};

for (const key in obj) {    
    const element = obj[key];
    console.log(key,element);
}


// for of loop
let name = "alok";
for (const c of name) {
    console.log(c);
}
console.log(c)

// while loop
 let b = 0;

while (b<5) {
    console.log(b);
    b++;
       console.log(b);
    b++;
}
console.log(b)
let i =0;

//do while loop
do {
    console.log(i + " Alok is a good boy")
    i++
    console.log(i + " Alok is a good boy")
} while (i<100);