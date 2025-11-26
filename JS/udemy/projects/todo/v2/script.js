let taskinfo = document.getElementById("taskinfo")
let dueDate = document.getElementById("due")
let difficulty = document.getElementById("difficulty")

let todoTasks = document.querySelector(".todo-list")

let addTaskbtn = document.getElementById("addtask")

class TaskManager{
    
    tasks = []
    init(){
        addTaskbtn.addEventListener("click",()=>{
            if(!taskinfo.value || !dueDate.value || !difficulty.value) return;
            this.addTask(taskinfo.value,dueDate.value,difficulty.value)
        })
    }
    addTask(taskinfo,due,difficulty){
        this.tasks.push({
            id: Date.now(),
            taskinfo,
            difficulty,
            due: new Date(due),
            progress: "pending"
        })
        this.renderTask()
    }
    renderTask(){
        todoTasks.innerHTML = ""
        this.tasks.forEach((e)=>{
                    const taskItem = document.createElement("div")
    taskItem.className = "taskitem"
      const taskDetails = document.createElement("div");
    taskDetails.className = "taskDetails";

    taskItem.appendChild(taskDetails)

    const taskContent = document.createElement("div");
    taskContent.className = "taskcontent";
    taskDetails.appendChild(taskContent)

    const taskDetail = document.createElement("span");
    taskDetail.className = "taskDetail";
    taskDetail.textContent =  `${e.taskinfo}`;

    const diffLevel = document.createElement("span");
    diffLevel.className = "diffLevel";
    diffLevel.textContent = ` - ${e.difficulty}`;
    
    taskContent.append(taskDetail,diffLevel)

        todoTasks.append(taskItem)
        })
    }
}

const app = new TaskManager();
app.init()

function addTaskItem(){
    const taskItem = document.createElement("div")
    taskItem.className = "taskitem"
      const taskDetails = document.createElement("div");
    taskDetails.className = "taskDetails";

    const taskContent = document.createElement("div");
    taskContent.className = "taskcontent";

    const taskDetail = document.createElement("span");
    taskDetail.className = "taskDetail";
    taskDetail.textContent = taskText;

    const diffLevel = document.createElement("span");
    diffLevel.className = "diffLevel";
    diffLevel.textContent = ` - ${difficulty}`;
}
// addTaskbtn.addEventListener("click",addTask)
