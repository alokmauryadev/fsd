const books = [];
const statuses = [];

const bookNumbers = 10;
for (let i = 0; i < bookNumbers; i++) {
    books[i]= "Book" + [i];
    statuses[i] = "Available";
}
console.log(books)
console.log(statuses)
// const initalStatus = '';
for (let i = 0; i < bookNumbers; i++) {
    console.log(`${books[i]} is ${statuses[i]}`)
}

