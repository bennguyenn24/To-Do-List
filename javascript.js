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
        //DOM manipulation 1st Part
            //create element <li>
            const newTask = document.createElement('li');
            //set element.innerText = taskItem
            newTask.innerText = taskItem;
            //append to taskContainer
            taskContainer.append(newTask);

        //DOM 2nd part
        //to add a remove button to each task item; just to create buttons
            const removeBtn = document.createElement('button');
            removeBtn.innerText = "X";
            newTask.append(removeBtn);

            //to add functionality
            removeBtn.addEventListener('click', () => {
                //1. wipe off of data storage / array
                todoArr.splice(todoArr.indexOf(taskItem), 1);
                //2. wipe off of page / innerText
                newTask.remove();

            })


    })

}


function clearTasks(){ 
    taskContainer.innerText = "";
}

function clearInput(){
    input.value = "";
}

