console.log(document.body.childNodes)
console.log(document.body.children)
console.log(document.body.children[0].children)

console.log(document.body.children[0].firstChild)
console.log(document.body.children[0].lastChild)
console.log(document.body.children[0].lastElementChild)
// children looks like an array, but they are collection, but not an actual array, to use array methods we have to use Arra.from()
// they are iterable using foroff loops
// siblings are the nodes which are children of the same parent
console.log(document.body.children[0].lastElementChild.previousElementSibling)
console.log(document.body.children[0].lastElementChild.nextSibling)


//table links

// certain DOM elements may provide additional properties specific to their type for convenience. 
// Table element supports the following properties

// table.rows -> collection of tr elements

console.log(document.body.children)
console.log(document.body.children[1].rows[0].cells.cellIndex)

let span = document.getElementById('spn');
span.style.color = "red";

let cspan = document.getElementsByClassName('data');
let data = document.querySelectorAll(".data");
data.forEach((v)=>v.style.color="yellow")
console.log(cspan[0])
cspan[0].style.color="green";
