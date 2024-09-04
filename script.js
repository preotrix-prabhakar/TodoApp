var taskListArr = [];
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById("Add")
let val = document.getElementById("taskInput");
let del = document.getElementsByClassName('delete-btn');

function addTask() {
    if (taskInput.value.trim() !== "")
        taskListArr.unshift({ id: Date.now(), value: taskInput.value });
    taskInput.value = "";
    updateTaskList();
    console.log(taskListArr);
}
taskInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});

addBtn.addEventListener("click", () => {
    addTask();
});

function handleDelete(event) {
    
    let buttonId = event.target.id;
    let taskIndex = taskListArr.findIndex(task => task.id == buttonId)

    
    if (taskIndex > -1) {
        
        taskListArr.splice(taskIndex, 1);
    }
    updateTaskList();
    console.log(taskListArr);
   
}

function updateTaskList() {

    taskList.innerHTML = "";
    taskListArr.forEach(task => {
        
        let li = document.createElement('li');
        li.innerHTML = `${task.value} <button class="delete-btn" id="${task.id}">Delete</button>`;
        li.id = task.id;
        taskList.appendChild(li);

        li.querySelector(".delete-btn").addEventListener("click", handleDelete);
    });

}
console.log(del);
