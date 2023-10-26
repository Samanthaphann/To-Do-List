const taskInput = document.getElementById('task');
const btnButton = document.getElementById('btn');
const taskList = document.getElementById('taskList');

// Add new task
// btnButton.addEventListener('click', function () {
//     const taskText = taskInput.value;

//     if (taskText.trim() !== '') {
//         const newTask = document.createElement('li');
//         newTask.innerText = taskText;
//         taskList.appendChild(newTask);
//         taskInput.value = '';

//         // Add delete button
//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'Delete';
//         newTask.appendChild(deleteButton);

//         // Remove task when done
//         deleteButton.addEventListener('click', function () {
//             taskList.removeChild(newTask);
//         });
//     }
// });


function addTask() {

    const InputTask = taskInput.value;
    if (InputTask !== '') {
        const newTaskcontainer = document.createElement('div');
        const taskText = document.createElement('p');
        taskText.innerText = InputTask
        // newTask.innerText = taskText;
        newTaskcontainer.appendChild(taskText);
        // taskList.appendChild(newTask);
        taskInput.value = '';

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style.backgroundColor = 'red'
        deleteButton.style.color = 'white'
        deleteButton.style.border = 'white'
        newTaskcontainer.appendChild(deleteButton);

        //create the finish button
        const finishbutton = document.createElement('button')
        finishbutton.innerText = 'Finished';
        finishbutton.style.backgroundColor = 'green'
        finishbutton.style.color = 'white'
        finishbutton.style.border = 'white'
        newTaskcontainer.appendChild(finishbutton);
        taskList.appendChild(newTaskcontainer);

         // Event listener to finish a task
        finishbutton.addEventListener('click', function () {
        newTaskcontainer.classList.toggle('finished');
        });

        // Event listener to delete a task
        deleteButton.addEventListener('click', function () {
        taskList.removeChild(newTaskcontainer);
        });
    }
    
    }

btnButton.addEventListener("click", addTask);