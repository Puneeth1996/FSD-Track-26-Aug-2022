var taskInput = document.querySelector('.task-input');
var todoSubmitButton = document.getElementById('todo-submit-button');
var ulContent = document.querySelector('.todo-list');

taskInput.addEventListener('keyup', function changeHandler(event){
    if(event.key === 'Enter') {
        buttonClick();
    }
});

function buttonClick(){
    // create an li element and add to the ul with class="todo-list"
    var li = document.createElement('li');
    li.innerText = taskInput.value;
    
    // adding class names to the newly added todo li items 
    li.classList.add('item-todo');
    li.setAttribute('onclick','struck(this);');
    li.setAttribute('style', 'color: antiquewhite')
    ulContent.appendChild(li);
    // also clear the input field 
    taskInput.value = '';
    styleOddTodoITems();
};

todoSubmitButton.addEventListener('click', buttonClick);

// Next steps

// Clicking on the list item should strike the text marking the item as completed.
function struck(ele){
    ele.style="text-decoration:line-through";
}


// Add odd numbered li elements some styling with li nth-child ( event ) for some styling 

// https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function styleOddTodoITems(){
    var liOddItems = document.querySelectorAll('.item-todo:nth-child(odd)');
    console.log(liOddItems);
    liOddItems.forEach( liItem => {
        liItem.style.backgroundColor  = generateRandomColor();
    });
}
