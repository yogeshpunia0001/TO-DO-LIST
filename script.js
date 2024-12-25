// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => li.remove());

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add click event to mark as completed
    li.addEventListener('click', () => li.classList.toggle('completed'));

    // Append the task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
