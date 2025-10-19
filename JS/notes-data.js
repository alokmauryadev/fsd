// JavaScript Study Notes Data
const chaptersData = [
    {
        id: 1,
        title: "JavaScript Fundamentals",
        icon: "🚀",
        color: "blue",
        content: `
            <div class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">What is JavaScript?</h3>
                    <p class="text-blue-700">JavaScript is a high-level, interpreted programming language that is primarily used for web development. It runs in the browser and allows you to make web pages interactive.</p>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Key Characteristics</h3>
                    <ul class="text-yellow-700 space-y-1">
                        <li>• <span class="highlight">Interpreted:</span> Code is executed line by line</li>
                        <li>• <span class="highlight">Dynamic:</span> Variables can change types at runtime</li>
                        <li>• <span class="highlight">Prototype-based:</span> Uses prototypes for inheritance</li>
                        <li>• <span class="highlight">Event-driven:</span> Responds to user interactions</li>
                        <li>• <span class="highlight">Case-sensitive:</span> Variables and functions are case-sensitive</li>
                    </ul>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Where JavaScript Runs</h3>
                    <div class="text-green-700 space-y-2">
                        <p><strong>Client-side:</strong> In web browsers (Chrome, Firefox, Safari, Edge)</p>
                        <p><strong>Server-side:</strong> Node.js runtime environment</p>
                        <p><strong>Mobile apps:</strong> React Native, Cordova/PhoneGap</p>
                        <p><strong>Desktop apps:</strong> Electron framework</p>
                    </div>
                </div>

                <div class="code-block">
                    <h4 class="font-semibold mb-2">First JavaScript Code:</h4>
                    <pre class="text-sm"><code>console.log("Hello, World!");
// Output: Hello, World!</code></pre>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">JavaScript Engines</h3>
                    <div class="text-purple-700 space-y-2">
                        <p><strong>V8:</strong> Used by Chrome and Node.js (Google)</p>
                        <p><strong>SpiderMonkey:</strong> Used by Firefox (Mozilla)</p>
                        <p><strong>JavaScriptCore:</strong> Used by Safari (Apple)</p>
                        <p><strong>Chakra:</strong> Used by Edge (Microsoft)</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "Data Types and Variables",
        icon: "📊",
        color: "green",
        content: `
            <div class="space-y-6">
                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Primitive Data Types</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-green-700 mb-2">Basic Types:</h4>
                            <ul class="text-green-600 space-y-1 text-sm">
                                <li><span class="highlight">string:</span> "Hello World", 'JavaScript'</li>
                                <li><span class="highlight">number:</span> 42, 3.14, -100, Infinity</li>
                                <li><span class="highlight">boolean:</span> true, false</li>
                                <li><span class="highlight">undefined:</span> Variable declared but not assigned</li>
                                <li><span class="highlight">null:</span> Intentional absence of value</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium text-green-700 mb-2">Special Types:</h4>
                            <ul class="text-green-600 space-y-1 text-sm">
                                <li><span class="highlight">Symbol:</span> Unique identifiers (ES6)</li>
                                <li><span class="highlight">BigInt:</span> Large integers (ES11)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Variable Declarations</h3>
                    <div class="space-y-3">
                        <div class="code-block">
                            <pre class="text-sm"><code>// var (function-scoped, can be redeclared)
var name = "John";
var name = "Jane"; // Allowed

// let (block-scoped, cannot be redeclared)
let age = 25;
let age = 30; // SyntaxError

// const (block-scoped, cannot be reassigned)
const PI = 3.14159;
PI = 3.14; // TypeError</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Type Coercion</h3>
                    <div class="text-yellow-700 space-y-2">
                        <p>JavaScript automatically converts types in certain situations:</p>
                        <div class="code-block">
                            <pre class="text-sm"><code>// String + Number = String
"5" + 3     // "53"
"5" - 3     // 2

// Boolean coercion
!!"hello"   // true
!!""        // false
!!0         // false
!!1         // true

// Loose equality (==) vs Strict equality (===)
5 == "5"    // true (type coercion)
5 === "5"   // false (no type coercion)</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Checking Data Types</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>typeof "Hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object" (historical bug)
typeof {}             // "object"
typeof []             // "object"
typeof function() {}  // "function"
typeof Symbol()       // "symbol"</code></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "Control Flow",
        icon: "🔀",
        color: "purple",
        content: `
            <div class="space-y-6">
                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Conditional Statements</h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-medium text-purple-700 mb-2">if...else Statement:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-purple-700 mb-2">Switch Statement:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular weekday");
}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Loops</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">for Loop:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Looping through array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">while Loop:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

// Do-while (executes at least once)
let x = 0;
do {
    console.log("X:", x);
    x++;
} while (x < 3);</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">for...of Loop:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>// For arrays
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

// For strings
let text = "Hello";
for (let char of text) {
    console.log(char);
}</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">for...in Loop:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code">// For objects
let person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ":", person[key]);
}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Control Flow Keywords</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// break - exits the loop/switch
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - skips current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "Functions",
        icon: "⚙️",
        color: "orange",
        content: `
            <div class="space-y-6">
                <div class="bg-orange-50 border-l-4 border-orange-500 p-4">
                    <h3 class="text-lg font-semibold text-orange-800 mb-2">Function Declaration</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Function declaration (hoisted)
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // "Hello, John!"

// Function expression (not hoisted)
const sayHello = function(name) {
    return "Hi, " + name + "!";
};

console.log(sayHello("Jane")); // "Hi, Jane!"</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Arrow Functions (ES6)</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Basic arrow function
const add = (a, b) => {
    return a + b;
};

// Single parameter (parentheses optional)
const square = x => {
    return x * x;
};

// Single expression (implicit return)
const multiply = (a, b) => a * b;

// No parameters
const sayHi = () => "Hello!";

// Multiple statements need curly braces
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Function Parameters</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Default parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("John")); // "Hello, John!"

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Callbacks</h3>
                    <div class="space-y-4">
                        <p class="text-purple-700">Functions passed as arguments to other functions</p>
                        <div class="code-block">
                            <pre class="text-sm"><code>// Higher-order function
function performOperation(a, b, callback) {
    return callback(a, b);
}

// Callback functions
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

console.log(performOperation(5, 3, add)); // 8
console.log(performOperation(5, 3, multiply)); // 15

// Anonymous callback
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Scope and Closures</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Global scope
let globalVar = "I'm global";

// Function scope
function outer() {
    let outerVar = "I'm in outer function";

    function inner() {
        let innerVar = "I'm in inner function";
        console.log(outerVar); // Accessible
        console.log(globalVar); // Accessible
    }

    console.log(innerVar); // Error: innerVar not accessible
    return inner;
}

let returnedFunction = outer();
returnedFunction(); // This is a closure</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "Arrays",
        icon: "📋",
        color: "indigo",
        content: `
            <div class="space-y-6">
                <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                    <h3 class="text-lg font-semibold text-indigo-800 mb-2">Creating Arrays</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Array literal
let fruits = ["apple", "banana", "orange"];

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Empty array
let empty = [];

// Array with mixed types
let mixed = [1, "hello", true, null, {name: "John"}];

// Array.of() (ES6)
let arr = Array.of(1, 2, 3); // [1, 2, 3]

// Array.from() (ES6)
let str = "hello";
let arrFromStr = Array.from(str); // ["h", "e", "l", "l", "o"]</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Array Methods</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Adding/Removing Elements:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let arr = [1, 2, 3];

// Add to end
arr.push(4); // [1, 2, 3, 4]

// Remove from end
arr.pop(); // [1, 2, 3]

// Add to beginning
arr.unshift(0); // [0, 1, 2, 3]

// Remove from beginning
arr.shift(); // [1, 2, 3]</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Array Information:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let arr = [1, 2, 3, 4, 5];

arr.length; // 5
arr.indexOf(3); // 2
arr.includes(3); // true
arr.lastIndexOf(2); // 1</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Array Manipulation Methods</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>let arr = [1, 2, 3, 4, 5];

// slice() - creates shallow copy
let sliced = arr.slice(1, 4); // [2, 3, 4]

// splice() - modifies original array
let spliced = arr.splice(2, 2, "a", "b"); // [3, 4]
console.log(arr); // [1, 2, "a", "b", 5]

// concat() - joins arrays
let arr2 = [6, 7];
let combined = arr.concat(arr2); // [1, 2, 3, 4, 5, 6, 7]

// join() - converts to string
let fruits = ["apple", "banana", "orange"];
fruits.join(" and "); // "apple and banana and orange"</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Iterating Arrays</h3>
                    <div class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="code-block">
                                <pre class="text-sm"><code>// for loop
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...of loop
for (let item of arr) {
    console.log(item);
}

// forEach() method
arr.forEach((item, index) => {
    console.log(index + ": " + item);
});</code></pre>
                            </div>

                            <div class="code-block">
                                <pre class="text-sm"><code>// map() - transforms each element
let doubled = arr.map(x => x * 2);
// [2, 4, 6]

// filter() - creates new array with elements that pass test
let even = arr.filter(x => x % 2 === 0);
// [2]

// reduce() - reduces array to single value
let sum = arr.reduce((total, x) => total + x, 0);
// 6</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Sorting and Searching</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// sort() - modifies original array
numbers.sort(); // [1, 1, 2, 3, 4, 5, 6, 9]

// find() - returns first element that matches condition
let found = numbers.find(x => x > 5); // 6

// findIndex() - returns index of first matching element
let foundIndex = numbers.findIndex(x => x > 5); // 6

// some() - tests if at least one element passes test
let hasEven = numbers.some(x => x % 2 === 0); // true

// every() - tests if all elements pass test
let allEven = numbers.every(x => x % 2 === 0); // false</code></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "Objects and Prototypes",
        icon: "🏗️",
        color: "red",
        content: `
            <div class="space-y-6">
                <div class="bg-red-50 border-l-4 border-red-500 p-4">
                    <h3 class="text-lg font-semibold text-red-800 mb-2">Creating Objects</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false
};

// Accessing properties
console.log(person.name); // "John"
console.log(person["age"]); // 30

// Adding properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let john = new Person("John", 30, "New York");
let jane = new Person("Jane", 25, "Boston");</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Object Methods</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

// Object.keys() - get all keys
Object.keys(person); // ["name", "age", "greet"]

// Object.values() - get all values
Object.values(person); // ["John", 30, function]

// Object.entries() - get key-value pairs
Object.entries(person); // [["name", "John"], ["age", 30], ...]

// hasOwnProperty() - check if property exists
person.hasOwnProperty("name"); // true
person.hasOwnProperty("email"); // false</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Symbols (ES6)</h3>
                    <div class="space-y-4">
                        <p class="text-green-700">Symbols are unique identifiers that can be used as object keys</p>
                        <div class="code-block">
                            <pre class="text-sm"><code>// Creating symbols
const id = Symbol("userId");
const id2 = Symbol("userId");

// Symbols are unique even with same description
console.log(id === id2); // false

// Using symbols as object keys
let user = {
    name: "John",
    [id]: 12345
};

// Accessing symbol properties
console.log(user[id]); // 12345

// Symbols are not enumerable in for...in loops
for (let key in user) {
    console.log(key); // Only "name", not the symbol
}

// To get symbol keys
Object.getOwnPropertySymbols(user); // [Symbol(userId)]</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Prototypes</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Every object has a prototype
let obj = {};
console.log(obj.__proto__); // Object.prototype

// Adding methods to prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype (better for memory)
Person.prototype.greet = function() {
    return "Hello, I'm " + this.name;
};

let john = new Person("John", 30);
console.log(john.greet()); // "Hello, I'm John"

// Prototype chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Object Destructuring (ES6)</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>let person = {
    name: "John",
    age: 30,
    city: "New York",
    email: "john@example.com"
};

// Basic destructuring
let { name, age } = person;
console.log(name, age); // "John" 30

// Renaming variables
let { name: fullName, age: personAge } = person;
console.log(fullName, personAge); // "John" 30

// Default values
let { name, country = "USA" } = person;
console.log(country); // "USA"

// Nested destructuring
let user = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};
let { address: { city, zip } } = user;
console.log(city, zip); // "New York" "10001"</code></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 7,
        title: "Strings",
        icon: "📝",
        color: "pink",
        content: `
            <div class="space-y-6">
                <div class="bg-pink-50 border-l-4 border-pink-500 p-4">
                    <h3 class="text-lg font-semibold text-pink-800 mb-2">String Basics</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// String literals
let singleQuotes = 'Hello, World!';
let doubleQuotes = "Hello, World!";
let templateLiteral = \`Hello, World!\`;

// String length
let text = "JavaScript";
console.log(text.length); // 10

// Accessing characters
console.log(text[0]); // "J"
console.log(text[text.length - 1]); // "t"

// Strings are immutable
text[0] = "j"; // This doesn't work
console.log(text); // Still "JavaScript"</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Template Literals (ES6)</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Basic template literals
let name = "John";
let greeting = \`Hello, \${name}!\`;
console.log(greeting); // "Hello, John!"

// Multi-line strings
let multiLine = \`
    This is line 1
    This is line 2
    This is line 3
\`;
console.log(multiLine);

// Expressions in template literals
let a = 5, b = 10;
let result = \`The sum of \${a} and \${b} is \${a + b}\`;
console.log(result); // "The sum of 5 and 10 is 15"</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">String Methods</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-green-700 mb-2">Search Methods:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let text = "Hello, World!";

// indexOf() - returns index or -1
text.indexOf("World"); // 7
text.indexOf("world"); // -1

// includes() - returns boolean
text.includes("World"); // true
text.includes("world"); // false

// startsWith() / endsWith()
text.startsWith("Hello"); // true
text.endsWith("!"); // true</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-green-700 mb-2">Modification Methods:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>let text = "Hello, World!";

// toUpperCase() / toLowerCase()
text.toUpperCase(); // "HELLO, WORLD!"
text.toLowerCase(); // "hello, world!"

// trim() - removes whitespace
"  hello  ".trim(); // "hello"

// replace() - replaces first occurrence
text.replace("World", "Universe"); // "Hello, Universe!"</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">String Extraction Methods</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>let text = "JavaScript is awesome!";

// slice() - extracts part of string
text.slice(0, 10); // "JavaScript"
text.slice(-8); // "awesome!"

// substring() - similar to slice
text.substring(0, 10); // "JavaScript"

// substr() - deprecated but still used
text.substr(11, 2); // "is"

// split() - converts string to array
let words = text.split(" "); // ["JavaScript", "is", "awesome!"]
let chars = text.split(""); // ["J", "a", "v", "a", ...]</code></pre>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Regular Expressions</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Basic regex patterns
let text = "JavaScript is awesome!";

// test() - returns boolean
/awesome/.test(text); // true
/Java/.test(text); // true

// match() - returns matches or null
text.match(/is/g); // ["is"]

// replace() with regex
let newText = text.replace(/awesome/gi, "amazing");
// "JavaScript is amazing!"

// Common regex patterns:
// /pattern/flags
// g - global (find all matches)
// i - case insensitive
// m - multiline</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 8,
        title: "DOM Manipulation",
        icon: "🌐",
        color: "teal",
        content: `
            <div class="space-y-6">
                <div class="bg-teal-50 border-l-4 border-teal-500 p-4">
                    <h3 class="text-lg font-semibold text-teal-800 mb-2">DOM Basics</h3>
                    <div class="space-y-4">
                        <p class="text-teal-700">DOM (Document Object Model) is a programming interface for HTML documents that represents the page as a tree of objects that can be modified.</p>
                        <div class="code-block">
                            <pre class="text-sm"><code>// Accessing DOM elements
console.log(document); // Entire document
console.log(document.body); // Body element
console.log(document.head); // Head element

// Document properties
console.log(document.title); // Page title
console.log(document.URL); // Page URL
console.log(document.domain); // Domain name

// Node types
console.log(document.body.nodeType); // 1 (ELEMENT_NODE)
console.log(document.body.childNodes); // All child nodes
console.log(document.body.children); // Only element children</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Selecting Elements</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Single Element Selectors:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>// getElementById()
let element = document.getElementById("myId");

// querySelector() (CSS selectors)
let firstDiv = document.querySelector("div");
let firstClass = document.querySelector(".myClass");
let firstId = document.querySelector("#myId");

// querySelector() examples:
document.querySelector("div p"); // First p inside div
document.querySelector("div > p"); // Direct child p of div
document.querySelector("div + p"); // Next sibling p of div</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Multiple Element Selectors:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>// getElementsByClassName()
let elements = document.getElementsByClassName("myClass");

// getElementsByTagName()
let paragraphs = document.getElementsByTagName("p");

// querySelectorAll()
let allDivs = document.querySelectorAll("div");
let allClasses = document.querySelectorAll(".myClass");

// Convert HTMLCollection/NodeList to Array
Array.from(elements).forEach(el => {
    console.log(el);
});</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">DOM Traversal</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Parent and children
let element = document.getElementById("myElement");

console.log(element.parentNode); // Parent node
console.log(element.parentElement); // Parent element

console.log(element.childNodes); // All child nodes (including text)
console.log(element.children); // Only element children

console.log(element.firstChild); // First child node
console.log(element.firstElementChild); // First element child
console.log(element.lastChild); // Last child node
console.log(element.lastElementChild); // Last element child

// Siblings
console.log(element.nextSibling); // Next sibling node
console.log(element.nextElementSibling); // Next element sibling
console.log(element.previousSibling); // Previous sibling node
console.log(element.previousElementSibling); // Previous element sibling</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Modifying Elements</h3>
                    <div class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="code-block">
                                <pre class="text-sm"><code>// Modifying content
let element = document.getElementById("myElement");

// innerHTML (includes HTML tags)
element.innerHTML = "<strong>Hello!</strong>";

// textContent (plain text only)
element.textContent = "Hello World!";

// outerHTML (includes element itself)
console.log(element.outerHTML);</code></pre>
                            </div>

                            <div class="code-block">
                                <pre class="text-sm"><code>// Modifying attributes
let img = document.querySelector("img");

// Get attribute
console.log(img.getAttribute("src"));

// Set attribute
img.setAttribute("alt", "My Image");

// Remove attribute
img.removeAttribute("width");

// Check if has attribute
console.log(img.hasAttribute("alt")); // true</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Creating and Adding Elements</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>// Creating elements
let newDiv = document.createElement("div");
let newText = document.createTextNode("Hello World!");

// Adding content
newDiv.appendChild(newText);
newDiv.innerHTML = "<p>This is a paragraph</p>";

// Adding to document
let container = document.getElementById("container");
container.appendChild(newDiv);

// insertBefore() - insert before specific element
let firstChild = container.firstElementChild;
container.insertBefore(newDiv, firstChild);

// insertAdjacentHTML() - insert HTML at specific position
element.insertAdjacentHTML("beforebegin", "<p>Before</p>");
element.insertAdjacentHTML("afterbegin", "<p>Inside start</p>");
element.insertAdjacentHTML("beforeend", "<p>Inside end</p>");
element.insertAdjacentHTML("afterend", "<p>After</p>");</code></pre>
                    </div>
                </div>

                <div class="bg-red-50 border-l-4 border-red-500 p-4">
                    <h3 class="text-lg font-semibold text-red-800 mb-2">Styling Elements</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>let element = document.getElementById("myElement");

// Inline styles
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";

// Multiple styles at once
Object.assign(element.style, {
    color: "red",
    backgroundColor: "blue",
    fontSize: "20px"
});

// Getting computed styles
let computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color);

// Working with CSS classes
element.classList.add("new-class");
element.classList.remove("old-class");
element.classList.toggle("active");
element.classList.contains("active"); // true/false

// Replace class
element.classList.replace("old-class", "new-class");</code></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 9,
        title: "Events",
        icon: "⚡",
        color: "yellow",
        content: `
            <div class="space-y-6">
                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Event Basics</h3>
                    <div class="space-y-4">
                        <p class="text-yellow-700">Events are actions that happen in the browser (user interactions, page loads, etc.) that JavaScript can respond to.</p>
                        <div class="code-block">
                            <pre class="text-sm"><code>// Basic event listener
let button = document.getElementById("myButton");

// Method 1: Using addEventListener()
button.addEventListener("click", function() {
    console.log("Button was clicked!");
});

// Method 2: Using onclick property
button.onclick = function() {
    console.log("Button clicked again!");
};

// Method 3: Inline HTML (not recommended for complex logic)
// <button onclick="console.log('Clicked')">Click me</button>

// Removing event listeners
function handleClick() {
    console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Common Events</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Mouse Events:</h4>
                            <ul class="text-blue-600 space-y-1 text-sm">
                                <li>• <span class="highlight">click</span> - When element is clicked</li>
                                <li>• <span class="highlight">dblclick</span> - Double click</li>
                                <li>• <span class="highlight">mousedown</span> - Mouse button pressed</li>
                                <li>• <span class="highlight">mouseup</span> - Mouse button released</li>
                                <li>• <span class="highlight">mouseenter</span> - Mouse enters element</li>
                                <li>• <span class="highlight">mouseleave</span> - Mouse leaves element</li>
                                <li>• <span class="highlight">mousemove</span> - Mouse moves over element</li>
                                <li>• <span class="highlight">contextmenu</span> - Right-click</li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Keyboard Events:</h4>
                            <ul class="text-blue-600 space-y-1 text-sm">
                                <li>• <span class="highlight">keydown</span> - Key is pressed</li>
                                <li>• <span class="highlight">keyup</span> - Key is released</li>
                                <li>• <span class="highlight">keypress</span> - Key is pressed (deprecated)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Event Object</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code">// Event object properties
let button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
    console.log(event.type); // "click"
    console.log(event.target); // Element that was clicked
    console.log(event.currentTarget); // Element the listener is on
    console.log(event.timeStamp); // Time when event occurred
});

// Mouse event properties
button.addEventListener("mousedown", function(event) {
    console.log(event.clientX, event.clientY); // Mouse coordinates
    console.log(event.button); // Which mouse button (0, 1, 2)
});

// Keyboard event properties
document.addEventListener("keydown", function(event) {
    console.log(event.key); // The key that was pressed
    console.log(event.code); // Physical key code
    console.log(event.altKey, event.ctrlKey, event.shiftKey); // Modifier keys
});</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Event Propagation</h3>
                    <div class="space-y-4">
                        <p class="text-purple-700">Events flow through three phases: Capturing → Target → Bubbling</p>
                        <div class="code-block">
                            <pre class="text-sm"><code">// Event bubbling (default behavior)
document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

// Event capturing (third parameter = true)
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked (capturing)");
}, true);

// Stopping propagation
element.addEventListener("click", function(event) {
    event.stopPropagation(); // Stops event from bubbling up
});

// Preventing default behavior
let link = document.querySelector("a");
link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents navigation
});</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-red-50 border-l-4 border-red-500 p-4">
                    <h3 class="text-lg font-semibold text-red-800 mb-2">Event Delegation</h3>
                    <div class="space-y-4">
                        <p class="text-red-700">Technique where you attach a single event listener to a parent element to handle events for its children</p>
                        <div class="code-block">
                            <pre class="text-sm"><code">// Instead of adding listeners to each list item
let listItems = document.querySelectorAll("li");
listItems.forEach(item => {
    item.addEventListener("click", function() {
        console.log("Item clicked");
    });
});

// Use event delegation
let list = document.getElementById("myList");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("List item clicked:", event.target.textContent);
    }
});

// This works even for dynamically added elements
let addButton = document.getElementById("addItem");
addButton.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
});</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 10,
        title: "Asynchronous JavaScript",
        icon: "⏰",
        color: "cyan",
        content: `
            <div class="space-y-6">
                <div class="bg-cyan-50 border-l-4 border-cyan-500 p-4">
                    <h3 class="text-lg font-semibold text-cyan-800 mb-2">Synchronous vs Asynchronous</h3>
                    <div class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-medium text-cyan-700 mb-2">Synchronous:</h4>
                                <p class="text-cyan-600 text-sm">Code executes line by line, each statement waits for the previous one to complete.</p>
                                <div class="code-block">
                                    <pre class="text-sm"><code>console.log("First");
console.log("Second"); // Waits for first
console.log("Third");  // Waits for second</code></pre>
                                </div>
                            </div>

                            <div>
                                <h4 class="font-medium text-cyan-700 mb-2">Asynchronous:</h4>
                                <p class="text-cyan-600 text-sm">Code doesn't wait for time-consuming operations to complete.</p>
                                <div class="code-block">
                                    <pre class="text-sm"><code>console.log("First");
setTimeout(() => {
    console.log("Second"); // Runs later
}, 1000);
console.log("Third");  // Doesn't wait</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Callbacks</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Basic callback
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // "Data received!" after 1 second
});

// Callback hell (pyramid of doom)
function step1(callback) {
    setTimeout(() => callback("Step 1"), 100);
}

function step2(callback) {
    setTimeout(() => callback("Step 2"), 100);
}

function step3(callback) {
    setTimeout(() => callback("Step 3"), 100);
}

step1((result1) => {
    step2((result2) => {
        step3((result3) => {
            console.log(result1, result2, result3);
        });
    });
});</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Promises (ES6)</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Creating a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data received!");
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}

// Using promises
fetchData()
    .then((data) => {
        console.log(data); // Success handler
        return "Processed: " + data;
    })
    .then((processedData) => {
        console.log(processedData);
    })
    .catch((error) => {
        console.error(error); // Error handler
    })
    .finally(() => {
        console.log("Operation complete"); // Always runs
    });

// Promise chaining (better than callback hell)
function getUser(userId) {
    return new Promise((resolve) => {
        resolve({ id: userId, name: "John" });
    });
}

getUser(1)
    .then(user => getUserPosts(user.id))
    .then(posts => getPostComments(posts[0].id))
    .then(comments => console.log(comments));</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Async/Await (ES8)</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Async function returns a promise
async function fetchUserData() {
    try {
        let user = await getUser(1);
        let posts = await getUserPosts(user.id);
        let comments = await getPostComments(posts[0].id);

        console.log(comments);
        return comments;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Re-throw for caller to handle
    }
}

// Using async function
fetchUserData()
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Failed:", error));

// Multiple async operations in parallel
async function fetchMultipleData() {
    try {
        // Run multiple promises concurrently
        let [user, posts] = await Promise.all([
            getUser(1),
            getUserPosts(1)
        ]);

        console.log("User:", user);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error:", error);
    }
}</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Promise Methods</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>// Promise.all() - waits for all promises to resolve
let promises = [
    getUser(1),
    getUser(2),
    getUser(3)
];

Promise.all(promises)
    .then(users => console.log(users))
    .catch(error => console.error(error));

// Promise.race() - resolves with first promise that completes
Promise.race([
    getUser(1), // Slow
    getUser(2), // Fast
    getUser(3)  // Medium
])
.then(user => console.log("First user:", user));

// Promise.allSettled() - waits for all promises to settle (resolve or reject)
Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(\`Promise \${index} fulfilled:\`, result.value);
            } else {
                console.log(\`Promise \${index} rejected:\`, result.reason);
            }
        });
    });</code></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 11,
        title: "Classes and OOP",
        icon: "🏛️",
        color: "emerald",
        content: `
            <div class="space-y-6">
                <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4">
                    <h3 class="text-lg font-semibold text-emerald-800 mb-2">Classes (ES6)</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Person object created");
    }

    // Instance method
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }

    // Static method (called on class, not instance)
    static info() {
        return "This is a Person class";
    }

    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }

    // Setter
    set birthYear(year) {
        this.age = new Date().getFullYear() - year;
    }
}

// Creating instances
let john = new Person("John", 30);
let jane = new Person("Jane", 25);

console.log(john.greet()); // "Hello, I'm John"
console.log(Person.info()); // "This is a Person class"

console.log(john.birthYear); // 1994 (getter)
john.birthYear = 1990; // Sets age to 34 (setter)</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Inheritance</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return \`\${this.name} is eating\`;
    }

    makeSound() {
        return "Some generic sound";
    }
}

// Child class extending parent
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    // Override parent method
    makeSound() {
        return "Woof!";
    }

    // New method specific to Dog
    fetch() {
        return \`\${this.name} is fetching the ball\`;
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }

    scratch() {
        return \`\${this.name} is scratching\`;
    }
}

// Using inheritance
let dog = new Dog("Buddy", "Golden Retriever");
let cat = new Cat("Whiskers");

console.log(dog.eat()); // "Buddy is eating" (inherited)
console.log(dog.makeSound()); // "Woof!" (overridden)
console.log(dog.fetch()); // "Buddy is fetching the ball" (own method)

console.log(cat.makeSound()); // "Meow!" (overridden)
console.log(cat.scratch()); // "Whiskers is scratching" (own method)</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Constructor Functions (Pre-ES6)</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Constructor function (capitalized by convention)
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Don't use arrow functions for methods
    // because they don't bind 'this' properly
    this.greet = function() {
        return \`Hello, I'm \${this.name}\`;
    };
}

// Adding methods to prototype (better for memory)
Person.prototype.sayGoodbye = function() {
    return \`Goodbye from \${this.name}\`;
};

// Creating instances
let john = new Person("John", 30);
console.log(john.greet()); // "Hello, I'm John"
console.log(john.sayGoodbye()); // "Goodbye from John"

// Checking instanceof
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// Prototype chain
console.log(Person.prototype.__proto__ === Object.prototype); // true</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Encapsulation</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Private properties using closures
function BankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        // Public methods
        getBalance: function() {
            return balance;
        },

        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return true;
            }
            return false;
        },

        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return true;
            }
            return false;
        }
    };
}

let account = BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined (private)</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Polymorphism</h3>
                    <div class="space-y-4">
                        <p class="text-yellow-700">Polymorphism allows objects of different classes to be treated as objects of a common parent class</p>
                        <div class="code-block">
                            <pre class="text-sm"><code>// Parent class
class Shape {
    constructor(color) {
        this.color = color;
    }

    // This will be overridden by child classes
    area() {
        return "Area calculation not implemented";
    }

    describe() {
        return \`This is a \${this.color} shape\`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Polymorphic behavior
let shapes = [
    new Circle("red", 5),
    new Rectangle("blue", 4, 6)
];

shapes.forEach(shape => {
    console.log(shape.describe());
    console.log("Area:", shape.area());
    console.log("---");
});</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 12,
        title: "Numbers, Math, and Date",
        icon: "🔢",
        color: "violet",
        content: `
            <div class="space-y-6">
                <div class="bg-violet-50 border-l-4 border-violet-500 p-4">
                    <h3 class="text-lg font-semibold text-violet-800 mb-2">Numbers</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Number types in JavaScript
console.log(typeof 42); // "number"
console.log(typeof 3.14); // "number"
console.log(typeof Infinity); // "number"
console.log(typeof NaN); // "number"

// Special number values
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(NaN); // NaN (Not a Number)

// Number methods
let num = 42.567;
console.log(num.toFixed(2)); // "42.57" (rounds to 2 decimals)
console.log(num.toPrecision(3)); // "42.6" (3 significant digits)
console.log(num.toString()); // "42.567"

// Converting strings to numbers
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("hello")); // NaN

console.log(parseInt("42")); // 42
console.log(parseInt("42.8")); // 42 (no decimals)
console.log(parseFloat("3.14")); // 3.14
console.log(parseInt("42px")); // 42</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">Math Object</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Basic Math Operations:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>// Mathematical constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Basic operations
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5

// Min/Max
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1</code></pre>
                            </div>
                        </div>

                        <div>
                            <h4 class="font-medium text-blue-700 mb-2">Advanced Math Functions:</h4>
                            <div class="code-block">
                                <pre class="text-sm"><code>// Power and square root
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Trigonometric functions
console.log(Math.sin(Math.PI/2)); // 1
console.log(Math.cos(0)); // 1

// Random numbers
console.log(Math.random()); // Random between 0 and 1

// Generate random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                    <h3 class="text-lg font-semibold text-green-800 mb-2">Date Object</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Creating date objects
let now = new Date(); // Current date and time
console.log(now);

let specificDate = new Date("2023-12-25"); // Specific date
let dateWithTime = new Date("2023-12-25T10:30:00"); // Date and time

let customDate = new Date(2023, 11, 25, 10, 30, 0); // Year, month (0-11), day, hour, minute, second

// Date methods
console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // 1-31 (day of month)
console.log(now.getDay()); // 0-6 (0 = Sunday)

console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59
console.log(now.getMilliseconds()); // 0-999

// Setting date components
now.setFullYear(2025);
now.setMonth(5); // June
now.setDate(15);

// Date calculations
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Add 7 days

let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 7); // Subtract 7 days</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">Date Formatting</h3>
                    <div class="space-y-4">
                        <div class="code-block">
                            <pre class="text-sm"><code>// Converting dates to strings
let date = new Date("2023-12-25T15:30:00");

console.log(date.toString());
// "Sun Dec 25 2023 15:30:00 GMT+0530 (India Standard Time)"

console.log(date.toDateString()); // "Sun Dec 25 2023"
console.log(date.toTimeString()); // "15:30:00 GMT+0530 (India Standard Time)"

console.log(date.toLocaleDateString()); // "12/25/2023" (locale specific)
console.log(date.toLocaleTimeString()); // "3:30:00 PM" (locale specific)

console.log(date.toISOString()); // "2023-12-25T10:00:00.000Z"

// Custom formatting
function formatDate(date) {
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

console.log(formatDate(date)); // "December 25, 2023, 03:30 PM"</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 class="text-lg font-semibold text-yellow-800 mb-2">Working with Timestamps</h3>
                    <div class="code-block">
                        <pre class="text-sm"><code>// Timestamps (milliseconds since January 1, 1970)
let now = new Date();
console.log(now.getTime()); // Current timestamp

// Creating date from timestamp
let timestamp = 1640995200000; // January 1, 2022
let dateFromTimestamp = new Date(timestamp);

// Adding time intervals
let future = new Date();
future.setHours(future.getHours() + 2); // Add 2 hours

let past = new Date();
past.setDate(past.getDate() - 30); // Subtract 30 days

// Calculating time differences
let startTime = new Date("2023-01-01");
let endTime = new Date("2023-12-31");
let difference = endTime.getTime() - startTime.getTime();

let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log("Days between dates:", daysDifference);</code></pre>
                    </div>
                </div>
            </div>
        `
    }
];