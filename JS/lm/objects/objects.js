const product = {
    name: 'socks',
    price: 1090,
}; 
console.log( product);
console.log(product.name);
console.log(product.price);
product.name = 'laptop';
console.log(product.name);
delete product.name;
console.log(product)

// iteration in javascript

const course = {
    title: "Full Stack Development",
    duration: "85 hours",
    price: 299,
    rating: 4.5
}

for (const key in course) {
    if (!Object.hasOwn(course, key)) continue;
    
    const element = course[key];
    console.log(`${key} - ${element}`)
    
}