"use strict"
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("list");


addButton.addEventListener("click", function(event) {
  
  event.preventDefault();

  
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
   
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    
    taskList.appendChild(newTask);

    taskInput.value = "";
  }
});
