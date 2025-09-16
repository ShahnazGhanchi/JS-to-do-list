// get element

const taskInput =document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
// add task
addBtn.addEventListener("click",()=>{
    const taskText = taskInput.value.trim();
    if(taskText ===""){
alert("Please enter a task! ");
return;
    }
    // create li element
const li =document.createElement("li");
li.textContent = taskText;

// Delete button
const delBtn = document.createElement("button");
delBtn .textContent ="❌";
delBtn.style.marginLeft = "10px";
delBtn.onclick = () => li.remove();
li.appendChild(delBtn);
taskList.appendChild(li);
// clear input
taskInput.value = "";
} 
)

