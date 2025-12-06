// // let text = "hello 12 asfasd 1344";
// // // Correct: Use the RegExp literal syntax /pattern/
// // let result = text.match(/(\d)+/); 
// // console.log(result)

// // // result is now ["1", index: 7, input: "I love 1", groups: undefined]console.log(result)
// // // const str = 'foo1bar2baz3';
// // // const regex = /(\d)/g;
// // // const strreg  = [...str.match(regex)]; 
// // // console.log(result)


// // let text = "Alice and Bob went to Delhi2"
// // let result = text.match(/\b[A-Z][a-zA-Z]*\b/g)
// // let text = "I love javascript, 100 times more than python"
// // let text = "Hello@$@word#2025"



// // let result = text.search(/[A-Z]/)
// // console.log(result)

// const regexGlobal = /[a-z]/g; // Global flag is set
// const text = "banana";
// // console.log(text.test(regexGlobal));
// // console.log(text.test(regexGlobal));
// // console.log(text.test(regexGlobal));
// // console.log(text.test(regexGlobal));
// // console.log(text.test(regexGlobal));
// console.log(regexGlobal.test(text)); // 1. true (finds 'a' at index 1). lastIndex is now 2.
// console.log(regexGlobal.test(text)); // 2. true (finds 'a' at index 3). lastIndex is now 4.
// console.log(regexGlobal.test(text)); // 3. true (finds 'a' at index 5). lastIndex is now 6.
// console.log(regexGlobal.test(text)); // 4. false (end of string). lastIndex resets to 0.

// // console.log(regexGlobal.test(text)); // 5. true (restarts and finds 'a' at index 1). lastIndex is now 2.


// Access the code units at positions 0 and 1
const s = "😂";
console.log(s.codePointAt(1));

// First code unit
// console.log(s.charCodeAt(1)); // Second code unit

// Access the true Unicode code point
// console.log(s.codePointAt(0)); // Actual code point for the character
