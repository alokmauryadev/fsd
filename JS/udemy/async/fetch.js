let globalData;
// async function fetchData(url){
//    await fetch(url);
// }
async function fetchData(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
    if(!response.ok){
     throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    globalData = data;
} catch(error){
    console.log("Error fetching data:", error)
}
}
// fetchData('https://jsonplaceholder.typicode.com/todos/1')


async function loadData(){
    let id = document.getElementById("id")
    let userId = document.getElementById("userId")
    let title = document.getElementById("title")
    let status = document.getElementById("status")
    await fetchData();
    let apiData = globalData;
    userId.innerText = `User ID: ${apiData.userId}`
    id.innerText = `ID: ${apiData.id}`
    title.innerText = ` Title: ${apiData.title}`
    status.innerText = apiData.completed==true?("Completed: True"):("Completed: False")
}

loadData();
// console.log(fetchData("https://jsonplaceholder.typicode.com/todos/1"))
// document.addEventListener("DOMContentLoaded",loadData())