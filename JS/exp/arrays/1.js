let obj = {
    name: "Alok",
    course: "Full Stack Development"
}

let newarr = Array.from(obj.course)
console.log(newarr)

const original = [{ id: 1 }, { id: 2 }];
const shallowCopy = Array.from(original);

shallowCopy[0].id = 99;

console.log(original[0].id); // 99
console.log(shallowCopy[0].id); // 99
