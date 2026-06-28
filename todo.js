let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskError = document.getElementById("taskError");

// localStorage se tasks load karo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Pehle se saved tasks show karo
showTasks();

addBtn.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task == "") {
        taskError.innerText = "Please enter a task";
        return;
    }

    taskError.innerText = "";

    // Array mein save karo
    tasks.push({
        text: task,
        completed: false
    });

    // localStorage update karo
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Screen update karo
    showTasks();

    // Input clear
    taskInput.value = "";
});

function showTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        let li = document.createElement("li");
        li.innerText = task.text;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        // Complete Button
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";

        completeBtn.addEventListener("click", function () {

            tasks[index].completed = !tasks[index].completed;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            showTasks();
        });

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function () {

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            showTasks();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

}