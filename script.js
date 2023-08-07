    function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskText = taskInput.value.trim();

      if (taskText === "") return;

      var taskList = document.getElementById("taskList");
      var taskItem = document.createElement("li");
      taskItem.className = "task-item";

      var taskCheckbox = document.createElement("input");
      taskCheckbox.type = "checkbox";
      taskCheckbox.onclick = function () {
        taskTextElement.classList.toggle("completed");
      };

      var taskTextElement = document.createElement("span");
      taskTextElement.className = "task-text";
      taskTextElement.textContent = taskText;

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn-delete";
      deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
      };

      taskItem.appendChild(taskCheckbox);
      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      taskInput.value = "";
    }