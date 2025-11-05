// agar constructor function koi fiel apne prototype par attach krle to us constructor se banne wale sabhi new field ya ni ki objects ke pas wo field apne pas chali jaati hai

console.log("We are starting in OOPs in JS");

// here we discuss about the user of class , so here in OOPs, we create the blueprint usually we call it as a class, and then create instances of the of class based on the blueprint
// so we are creating a factory, that ek sacha kaise dikega, phir ham different objects bna payenge
// let's start with function constructor

function CreateBiscuits(name, price, qty, company, category){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company  =company;
    this.category = category;
    console.log(this)
};
let biscuit1 = new CreateBiscuits("Oreo", 10,5,"Cadbury", "Chocholate")
let biscuit2 = new CreateBiscuits("Dark Fantasy", 30,6,"Cadbury", "Chocholate")

function CreatePencil(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

//using prototype to create a function
CreatePencil.prototype.write = function(text){
       let h1 = document.createElement("h1");
       h1.textContent = text;
       h1.style.color = this.color;
       document.body.append(h1);
    };
let pencil1 = new CreatePencil("Nataraj",10,"black","NATARAJ");
let pencil2 = new CreatePencil("Doms",10,"red","DOMS");
console.log(pencil1)
