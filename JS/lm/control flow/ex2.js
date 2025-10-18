let X = 0;          // Number
let Y = "Hello";    // String
let Z = "";         // Blank String (Falsy)

// Step 1: Logical AND
let result1 = X && Y;
console.log(result1)

// Step 2: Logical OR
let result2 = Z || Y;
console.log(result2)

// Step 3: NOT operator applied to the String result
let result3 = !result2;
console.log(result3)

// Step 4: Arithmetic operation involving NaN
let finalOutcome = result3 - 5;
console.log(finalOutcome)

let expr1 = 10 && (0 || "End") && 5;
console.log(expr1)
let expr3 = !!"0" && (NaN || null);
console.log(expr3)

let expr2 = "false" || (false + 1);
console.log(expr2)



