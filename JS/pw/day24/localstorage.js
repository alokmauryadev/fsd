let usersDiv = document.querySelector(".usersData")
let userName = document.getElementById("name")
let UserDesc = document.getElementById("userDesc")
let users;
try{
     users = JSON.parse(localStorage.getItem("userID") || [] ) 
}catch(e){
    console.log("Json Parsing Failed")
}

function addUser(name,desc){
    users = users.push({name,desc})
    localStorage.setItem("userID",JSON.stringify(users))
}

function renderUser(){
    users.forEach(e => {
        let userDiv = document.createElement("div")
        userDiv.className = "data"
        userDiv.innerHTML = `
        <h1>${e.name}</h1>
        <p>${e.desc}</p>
        `
        usersDiv.append(userDiv)
    });
}

function addUserData(){
    if(userName.value && UserDesc.value){
        
    }
}