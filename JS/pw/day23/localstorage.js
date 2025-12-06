let usersContainer = document.querySelector(".usersData")
let users;

try{
    users = JSON.parse(localStorage.getItem("users-data")) || []
} catch(e){
    console.log("")
}
console.log(users)
function addUser(name,desc){
    users.push({name,desc})
    console.log(users)
    localStorage.setItem("users-data",JSON.stringify(users))
    renderUsers();
}
function renderUsers(){
    usersContainer.innerHTML = ""
    users.forEach(e => {
        const userDiv = document.createElement("div")
        userDiv.className = "user"
        userDiv.innerHTML = `<h1>${e.name}</h1>
                <p>${e.desc}</p>
    `
    usersContainer.append(userDiv)
    });
}
renderUsers();