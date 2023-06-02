const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.todo-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    })

function addTodo() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;
    if (name === '') return;

    const dateInputElement = document.querySelector('.due-date-input');
    const dueDate = dateInputElement.value

    todoList.push({
        name,
        dueDate
    });
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}