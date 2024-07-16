document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => completeTask(newTask));

        newTask.appendChild(completeButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

function completeTask(task) {
    task.classList.add('completed');
    task.querySelector('button').remove();

    const completedTaskList = document.getElementById('completed-task-list');
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('completed-time');
    timeSpan.textContent = `${new Date().toLocaleString()}`;

    task.appendChild(timeSpan);
    completedTaskList.appendChild(task);
}

