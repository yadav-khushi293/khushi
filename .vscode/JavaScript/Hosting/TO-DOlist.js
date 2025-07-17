
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task before adding.");
        return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;

      const actions = document.createElement("div");
      actions.classList.add("actions");

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      
      editBtn.onclick = function () {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
          span.textContent = newTask.trim();
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function () {
        taskList.removeChild(li);
      };

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      taskList.appendChild(li);
      taskInput.value = ""; // Clear input after adding
    });
 