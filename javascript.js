const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const taskContainer = document.querySelector('.task-container')
const todoArr = [];

submitBtn.addEventListener('click', () =>{
    todoArr.push(input.value);
    clearTasks();
    clearInput()
    appendTask();
});

function appendTask(){

    //old function that appends entire array
        //taskContainer.append(todoArr)

    //map todoArr -> for each item, append it as a list item <li>

    //thisArray.map(function)
    //syntax for arrow functions: (args...) => function
    todoArr.map((taskItem) =>{
        //DOM manipulation
        //create element <li>
        const newTask = document.createElement('li');
        //set element.innerText = taskItem
        newTask.innerText = taskItem;
        //append to taskContainer
        taskContainer.append(newTask);
    })

}


function clearTasks(){ 
    taskContainer.innerText = "";
}

function clearInput(){
    input.value = "";
}

