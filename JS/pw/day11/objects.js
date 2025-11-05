// const key = "age";
// let user = {}
// user.name = "govind"
// user["name"] = "alok"
// console.log(user)

let fName = "greet"

let person = {
    age: 10
}

const student = Object.create(person)
student.name = "alok"
console.log()
// Object.setPrototypeOf(student,person)
// student.__proto__.age = 10;
console.log()
console.log(student.age)

// console.log(student.hasOwnProperty("age"))
// console.log(student);
// student[fName]()
// for(let eSubject in student.marks){
//     console.log(eSubject)
// }
// let name = ["alok","anubhav"]
// // console.log(name2);
// // console.log(name)
// // console.log(student)
// // delete student.class
// console.log(student)


