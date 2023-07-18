document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', addTask);

  function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      listItem.addEventListener('click', completeTask);
      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  }

  function completeTask(event) {
    event.target.classList.toggle('completed');
  }
});
