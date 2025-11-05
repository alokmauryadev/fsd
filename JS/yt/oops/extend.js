class User{
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`
        document.body.appendChild(h1)
    }
}

class Admin extends User{
    #data = "somesecret"
    constructor(name, address, username, email){
        super(name, address, username, email)
        this.admin = "admin";
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
}

let user1 = new User("Alok","Ballia","alokmaurya","alok@gmail.com")
let user2 = new User("Vikash","Bhopa","vikash123","vikash@gmail.com")
let admin1 = new Admin("Admin", "Lucknow","admin12","admin@admin.com")