let id = 0;
let tasks = [];

class Task {
  constructor(data) {
    this.id = this.generateId();
    this.data = data;
    this.status = "pending";
  }
  generateId() {
    id++;
    return id;
  }
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const taskInput = document.getElementById("task");
  const task = taskInput.value.trim();

  if (task === "") return;

  addTask(task);
  taskInput.value = "";
});

// ------------------
// Core Functions
// ------------------

function addTask(taskData) {
  const task = new Task(taskData);
  tasks.push(task);
  saveTasks();
  renderTask(task);
}

function renderTask(task) {
  const taskDiv = document.querySelector(".tasks");

  const newTask = document.createElement("div");
  newTask.id = task.id;
  newTask.className = "todo";
  if (task.status === "completed") newTask.classList.add("completed");

  const taskText = document.createElement("span");
  taskText.textContent = task.data;

  taskText.addEventListener("click", () => {
    newTask.classList.toggle("completed");
    task.status = task.status === "pending" ? "completed" : "pending";
    saveTasks();
  });

  const deleteButton = document.createElement("div");
  deleteButton.className = "deleteTask";
  deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

  deleteButton.addEventListener("click", () => {
    handleDelete(task.id);
  });

  newTask.appendChild(taskText);
  newTask.appendChild(deleteButton);
  taskDiv.appendChild(newTask);
}

function handleDelete(taskId) {
  const taskElement = document.getElementById(taskId);
  const isConfirm = confirm("Do you want to delete this task?");
  if (taskElement && isConfirm) {
    taskElement.remove();
  }

  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex > -1) tasks.splice(taskIndex, 1);

  saveTasks();
}

// ------------------
// Local Storage Support
// ------------------

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks = JSON.parse(saved);
    // Set "id" to highest existing ID so new tasks don't conflict
    id = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0;
    tasks.forEach((t) => renderTask(t));
  }
}

window.onload = loadTasks;
