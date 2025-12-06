let username = document.getElementById("username")
let messageBoX = document.getElementById("message")

function checkUser(){
    const xhr = new XMLHttpRequest();
    let name = username.value.trim()
    if(name!=""){
    xhr.open("GET",`https://jsonplaceholder.typicode.com/users?name=${username.value}`)}

    xhr.addEventListener("load",()=>{
        if(xhr.response==="[]"){
            messageBoX.innerText = "Username is Available"
            messageBoX.classList = "text-green-900"
        }
        else{
            messageBoX.innerText = "User already exists, Choose another name"
            messageBoX.classList = "text-red-500"
        }

    }) 

    xhr.send()
}
username.addEventListener("focus",()=>{
    messageBoX.innerHTML = ""
})
username.addEventListener("blur",checkUser)

