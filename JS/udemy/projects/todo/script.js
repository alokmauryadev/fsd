let form = document.querySelector("form");
let taskData = document.querySelector("#task");
let tasks = document.querySelector(".tasks")

class TaskManager {
  tasks = [];
  constructor() {}

  init() {
    form.addEventListener("submit", this.submitForm.bind(this));
  }

  submitForm(e) {
    e.preventDefault();
    this.addTask(taskData.value);
    form.reset();
  }

  addTask(content) {
    if(content.trim() === "") return
    const taskObj = {
      id: Date.now(),
      content: content,
      status: "pending"
    };
    this.tasks.push(taskObj);
    this.renderUI();
    console.log(this.tasks); 
  }
 renderUI(){
  tasks.innerHTML = ""
   this.tasks.forEach((e)=>{
      const taskSpan = document.createElement("span")
      taskSpan.classList = "task-item"
      taskSpan.textContent = e.content;
      tasks.appendChild(taskSpan)
    })
}
}

const myTaskList = new TaskManager();
myTaskList.init();
