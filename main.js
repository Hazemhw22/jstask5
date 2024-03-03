const addTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

function addTask(task) {
  tasks.push(task);
  renderTasks();
  newTaskInput.value = '';
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const checkmark = document.createElement('span');
    checkmark.className = 'checkmark';
    checkmark.textContent = task.isCompleted ? '✓' : '';
    checkmark.addEventListener('click', () => {
      task.isCompleted = !task.isCompleted;
      renderTasks();
    });

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = task.description;

    if (task.isCompleted) {
      description.style.textDecoration = 'line-through';
    }

    taskDiv.appendChild(checkmark);
    taskDiv.appendChild(description);
    taskList.appendChild(taskDiv);
  });
}

addTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const description = newTaskInput.value.trim();
  if (description) {
    addTask({ description, isCompleted: false });
  }
});

renderTasks();
