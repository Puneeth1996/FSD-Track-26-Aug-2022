

const createTodoElement = item => {
    const todoElement = document.createElement('li');

    todoElement.id = item.id;
    todoElement.appendChild(document.createTextNode(item.title));

    todoElement.onclick = async event => await removeTodoElement(event, todoElement);

    return todoElement;
};


const updateTodoList = todoItems => {
    const todoList = document.querySelector('ul');

    if (Array.isArray(todoItems) && todoItems.length > 0) {
        todoItems.map(todoItem => {
            todoList.appendChild(createTodoElement(todoItem));
        });
    } else if (todoItems) {
        todoList.appendChild(createTodoElement(todoItems));
    }
};

const main = async () => {
    updateTodoList(await getTodoItems());
};

main();


