let studentOverAllMarks = 470;
let studentMaths = 42;

// Validation: Check if Maths marks are reasonable given overall marks
if (studentOverAllMarks >= 450 && studentMaths < 50) {
    console.log("Maths marks seem too low for high overall score - possibly invalid");
} else if (studentOverAllMarks >= 450 || studentMaths >= 90) {
    console.log("Eligible for Master Class");
} else {
    console.log("You are not eligible");
}

// not operator
let a = 10;
if(!(a>3)){
    console.log(`${a} is less than 3`)
}
    console.log(`${a} is greater than 3`)
console.log(!true)