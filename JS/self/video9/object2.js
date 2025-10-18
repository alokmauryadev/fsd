const obj = {
    name: "Alok",
    class: "13th",
    address: "Ballia",
    phoneNo: "7854857854",
    isEnrolled: "false",
}
console.log(Object.entries(obj))
console.log(Object.values(obj))
console.log(obj.hasOwnProperty("phoneNo"))

let person = { name: "Harsita", occupation: "Developer" };

// Returns an array of arrays: [['name', 'Harsita'], ['occupation', 'Developer']]
const entriesArray = Object.entries(person);
console.log(entriesArray)
// Looping through the entries using forEach and destructuring the inner array:
entriesArray.forEach(entry => {
    // entry is [key, value]
    const key = entry[0];
    const value = entry[1];
    
    console.log(`Key: ${key}, Value: ${value}`);
});

const users = [];

const user1 = {
    fullname: {
        firstName: "Alok",
        lastName: "Maurya",
    },
    age: "18 years",
    isMember: true,
    isAdmin: false,
    lastLoggedIn: []
}
const user2 = {
    fullname: {
        firstName: "Rahul",
        lastName: "Yadav",
    },
    age: "20 years",
    isMember: false,
    isAdmin: false,
    lastLoggedIn: []
}
const user3 = {
    fullname: {
        firstName: "Mohit",
        lastName: "Sharma",
    },
    age: "24 years",
    isMember: true,
    isAdmin: true,
    lastLoggedIn: []
}

users.push(user1)
users.push(user2)
users.push(user3)

const AllUsers = Object.assign({},user1,user2,user3)

console.log(users)
console.log(AllUsers)
// const arr1 = ['alok','alka','sandeep','satyanjali']
// const arr2 = ['alok','anjali','anupriya','sandeep']

// const set1 = new Set(arr1)
// let duplicate = [];
// arr2.map((v=>{
//     if(set1.has(v)){
//         duplicate.push(v)
//     }}
// ));
// console.log(duplicate)

// const commonElements = arr1.filter((e=>arr2.includes(e)))
// console.log(commonElements)