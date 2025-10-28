const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Load saved tasks
    document.addEventListener("DOMContentLoaded", loadTasks);

    // Add new task
    addBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
      createTask(taskText);
      saveTask(taskText);
      taskInput.value = "";
    });

    // Create task element
    function createTask(text, completed = false) {
      const li = document.createElement("li");
      li.textContent = text;
      if (completed) li.classList.add("completed");

      const actions = document.createElement("div");
      actions.classList.add("actions");

      const doneBtn = document.createElement("button");
      doneBtn.innerHTML = "✅";
      doneBtn.classList.add("done");
      doneBtn.onclick = () => {
        li.classList.toggle("completed");
        updateStorage();
      };

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "❌";
      delBtn.classList.add("delete");
      delBtn.onclick = () => {
        li.remove();
        updateStorage();
      };

      actions.append(doneBtn, delBtn);
      li.appendChild(actions);
      taskList.appendChild(li);
    }

    // Save task to localStorage
    function saveTask(text) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ text, completed: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Update localStorage when modified
    function updateStorage() {
      const tasks = [];
      document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
          text: li.firstChild.textContent.trim(),
          completed: li.classList.contains("completed"),
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => createTask(task.text, task.completed));
    }
