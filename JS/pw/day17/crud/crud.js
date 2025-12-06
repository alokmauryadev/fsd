const createBtn = document.getElementById("createBtn");
const userId = document.getElementById("userId");
const title = document.getElementById("title");
const desc = document.getElementById("description")

createBtn.onclick = () => {
    if(!userId.value || !title.value || !desc.value){
        console.log("Invalid Post Request")
        return
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://jsonplaceholder.typicode.com/posts")
    xhr.setRequestHeader("Content-Type", "application/json")

    const reqBody = {
       title: userId.value,
       body: desc.value,
       userId: userId.value
    }
    xhr.send(JSON.stringify(reqBody))
}
