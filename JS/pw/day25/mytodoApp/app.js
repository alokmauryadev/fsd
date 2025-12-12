class Task{
    constructor(id,desc = "No Description",isCompleted = false){
        this.id = id;
        this.desc = desc;
        this.isCompleted = isCompleted;
    }
}

class TaskManager{
    constructor(){
        this.tasks = this.readFromLocalStorage();
    }
    // add the task
    createTask(description){
        const id ="t" + Date.now().toString(36) + Math.random().toString(36).slice(2,9);
        const task = new Task(id,description)
        this.tasks.push(task)
        this.savetoLocalStorage()
    }
    
    // delete the tasks
    deleteTask(id){
        this.tasks = this.tasks.filter(eTask => eTask.id !=id);
        this.savetoLocalStorage();
    }
    // update the status of task
    toogleStatus(id){
        const task = this.tasks.find(eTask =>eTask.id===id);
        if(task){
            task.isCompleted = !task.isCompleted
        }
        this.savetoLocalStorage();
    }
    // edit the task
    editTask(id,desc){
        const task = this.tasks.find(eTask => eTask.id==id);
        if(task && desc.length>0){
            task.desc = desc;
        }
    }
    // filter tasks based on status
    filterTasks(status){
        if(status==="pending"){
            return this.tasks.filter(eTask => eTask.isCompleted===false);
        }
        if(status==="completed"){
            return this.tasks.filter(eTask=>eTask.isCompleted===true)
        }
        return this.tasks;
    }
    //  read from the local storage
    readFromLocalStorage(){     
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }
    // store to local storage
    savetoLocalStorage(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}



// UI HANDLER


// taskInput =
// addBtn = document.getElementById("add-btn")
// filters = document.getElementById("filters")
// taskList = document.getElementById("task-list")
class UIHandler{
   constructor(TaskManager){
    this.taskManager = TaskManager;
    this.taskInput =  document.getElementById("task-input");
    this.taskList = document.getElementById("task-list");
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.addBtn = document.getElementById("add-btn")
    this.filterOn = "all";
    this.init();
    this.renderTasks()
   }
   init(){
    this.addBtn.addEventListener('click',()=>this.addTask())
    this.taskInput.addEventListener("keyup",(e)=>{
        console.log(e)
        if(e.key==="Enter"){
            this.addTask()
        }
    })
    this.filterButtons.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            this.filterOn = btn.dataset.filter;
            this.taskManager.filterTasks(this.filterOn)
            this.renderTasks();
            this.updateFilterButton();
        })
    })
   }

   updateFilterButton(){
    this.filterButtons.forEach(btn=>btn.classList.remove("active"));
    document.querySelectorAll(".filter-btn").forEach((e)=>{
        if(e.dataset.filter===this.filterOn){
            e.classList.add("active")
        }
    })
   }
   addTask(){
    const taskDesc = this.taskInput.value.trim();
    console.log("add task called")
    if(!taskDesc || taskDesc.length<3)
        return alert("Please enter a valid task!")

    this.taskManager.createTask(taskDesc);
    this.taskInput.value = ""  
    this.renderTasks();
   }
   renderTasks(){
    this.taskList.innerHTML = "";
    const tasks = this.taskManager.filterTasks(this.filterOn)
    tasks.forEach(task=>{
        const li = document.createElement('li');
li.classList.add("task-item");
if (task.isCompleted) {
    li.classList.add("completed");
}

        li.innerHTML = `
                  <div class="task-left">
            <input type="checkbox" ${task.isCompleted ? "checked" : ""} data-id="${task.id}" class="check">
            <span>${task.desc}</span>
          </div>
          <div>
            <button class="btn edit" data-id="${task.id}">Edit</button>
            <button class="btn delete" data-id="${task.id}">Delete</button>
          </div>
        `
        this.taskList.append(li)
    })
    this.dynamicEventListener();
   }
   dynamicEventListener(){
    document.querySelectorAll('.check').forEach(eCheckBox=>{
        eCheckBox.addEventListener('change',(e)=>{
            this.taskManager.toogleStatus(e.target.dataset.id);
            // this.savetoLocalStorage();
            this.renderTasks();
        })
    });
    document.querySelectorAll(".delete").forEach(deleteBtn=>{
        deleteBtn.addEventListener("click",(e)=>{
            this.taskManager.deleteTask(e.target.dataset.id);
            this.renderTasks();
        })
    });
    document.querySelectorAll(".edit").forEach(editBtn=>{
        editBtn.addEventListener("click",(e)=>{
            const id = e.target.dataset.id;
            const newDesc = prompt("Edit Task: ");
            if(newDesc){
                this.taskManager.editTask(id,newDesc);
                this.renderTasks();
            } 
        })
    })
   }
}

const app = new UIHandler(new TaskManager())

// filters.forEach(btn=>{
//     btn.addEventListner("click",()+>{
//         console.log(btn.dataset.filter)
//     })
// })