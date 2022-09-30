


const form = document.querySelector('form');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const title = document.querySelector('#new-todos__title').value;
    const userId = uuidv4();
    const completed = false;
    const todo = {
        userId,
        title,
        completed
    };

    const submitTodoItem = await addTodoItem(todo);
    updateTodoList(submitTodoItem);
});



const addTodoItem = async todo => {
    try {
        const response = await axios.post(`${BASE_URL}/todos`, todo);
        const newTodoItem = response.data;

        console.log(`Added a new Todo!`, newTodoItem);

        return newTodoItem;
    } catch (errors) {
        console.error(errors);
    }
};