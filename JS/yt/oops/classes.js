class CreatePencil{
    constructor(name,price,color,company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
        h1.addEventListener("click",(event)=>this.erase(event.currentTarget))
    }
    erase(h1){
        h1.remove();
    }
}

let pencil1 = new CreatePencil("DOMS", 10, "black","doms");
 