// const val=document.getElementsByTagName('input');
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

    // console.log(taskIndex);
    if (taskIndex > -1) {
        // Remove the task from the array
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

        // Attach the click event listener to the delete button
        li.querySelector(".delete-btn").addEventListener("click", handleDelete);
    });

}
console.log(del);
// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('taskInput');
//     const addButton = document.getElementById('Add');
//     const taskList = document.getElementById('taskList');

//     addButton.addEventListener('click', () => {
//         const taskText = taskInput.value.trim();
//         if (taskText !== '') {
//             // Create a new <li> element
//             const newTask = document.createElement('li');
//             newTask.textContent = taskText;

//             // Create a new delete button with a trash icon
//             const deleteButton = document.createElement('button');
//             deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

//             // Add event listener to delete button
//             deleteButton.addEventListener('click', () => {
//                 taskList.removeChild(newTask);
//             });

//             // Append the delete button to the <li> element
//             newTask.appendChild(deleteButton);

//             // Append the new <li> element to the task list
//             taskList.appendChild(newTask);

//             // Clear the input field
//             taskInput.value = '';
//         }
//     });

//     taskInput.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             addButton.click(); // Simulate the button click
//         }
//     });
// });
