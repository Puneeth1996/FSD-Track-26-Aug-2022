

const deleteTodoItem = async id => {
    try {
        const response = await axios.delete(`${BASE_URL}/todos/${id}`);
        console.log(`Deleted Todo ID: `, id);

        return response.data;
    } catch (errors) {
        console.error(errors);
    }
};


const removeTodoElement = async (event, element) => {
    event.target.parentElement.removeChild(element);
    const id = element.id;

    await deleteTodoItem(id);
};












