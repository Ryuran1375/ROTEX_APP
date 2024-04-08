const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;

    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteTask(task));
    task.appendChild(deleteButton);

    task.addEventListener('click', changeTaskState);
    tasksContainer.prepend(task)

    saveTasksToLocalStorage();
    
    event.target.reset();
};

const deleteTask = task => {
    task.remove();
    saveTasksToLocalStorage();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
    saveTasksToLocalStorage();
};


const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    });
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el));
};

const saveTasksToLocalStorage = () => {
    const tasks = order().map(el => el.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const retrieveTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach(taskText => {
            const task = document.createElement('div');
            task.classList.add('task', 'roundBorder');
            task.addEventListener('click', changeTaskState);
            task.textContent = taskText;
            tasksContainer.prepend(task);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteTask(task));
            task.appendChild(deleteButton);
        });
    }
};

// Load tasks from localStorage on page load
retrieveTasksFromLocalStorage();

setDate();
