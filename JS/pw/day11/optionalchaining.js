// let objA = { /* 'profile' is missing */ }
// let nameA = objA.profile?.name ?? "No object found"; // 'profile' is undefined. The chain stops here.
// console.log(nameA); // Output: undefined

// const user = {
//     greet(){
//         console.log("Hello I am a user!")
//     }
// }
// // user.greet();
// // user.info?.();

// let users = [{name:"alok"},{},null,undefined,{name:"kishan"}]

// for (const ele of users) {
//     ele?.name = ele?.name || "No users found"
// }
// console.log(users)

let user = {
    name: "sanjay",
    age: 25
};

// 1. Redefine 'name' property without 'value'
Object.defineProperty(user, 'name', {
    // value: user.name, // <--- OMITTED
    writable: false,
    configurable: false,
    enumerable: true
});

// 2. Observe the value
console.log(user.name); // Output: undefined 
// The original value "sanjay" is lost and replaced with the default 'undefined'.

// 3. Attempt to write a new value (which will fail because writable is false)
user.name = "vikas";
console.log(user.name); // Output: undefined (still)

// The property is now set to an unchangeable 'undefined', 
// which is almost certainly not the desired outcome.
user.name = "alok";
// console.log(user)