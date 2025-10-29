// array is a list of elements grouped together
// it's always written in square bracket

// an array can contain any type of datatype
let printName = () =>{
    console.log("My Name is Alok")
}
const arr = [0,1,2,3,4,5,6,null,"alok",printName()]
arr[9]
printName();


let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers.splice(5,4, "harry")) // it change the original array
console.log(numbers);
console.log(numbers.slice(2,3)); // slice doesn't creeate any copy of the array, it only returns the value we want from the object
console.log(numbers);