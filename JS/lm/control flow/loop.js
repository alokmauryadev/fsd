for (let i = 2; i<=10; i++) {
  if(i%2==0) 
    console.log(i);
}

let arr = ["vaibhav","ajmer","mahaveer"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

for (const element of arr) {
    console.log(element)

}

i=1;
// while(i<10){
//     console.log("Hurray!")
//     i++
// }
i=1;

do{
    console.log(i);
    i++;
} while(i<0);


let age = 18;

switch(age){
    case 12:
       console.log( "You can only dance")
       break
    case 18:
        console.log("You can Dance and drink")
        break
}

// let name = "alok"
// for (const element of name) {
//     console.log(element)
// }

// break and continue statements

// break is used to break the complete loop, when the complete iteration is run

// continue is used to skip the current iteration if condition is met

