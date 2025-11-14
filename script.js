const addButton = document.querySelector('.add-button');
const tasksContainer = document.querySelector('.tasks');


function activateTask(task) {
    const completeBtn = task.querySelector('.complete-button');
    const deleteBtn = task.querySelector('.cancel-button');
    const input = task.querySelector('input');

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();          // prevent editing
            input.blur();

        }
    });

    completeBtn.addEventListener('click', () => {
        task.classList.toggle('completed');

        if (task.classList.contains('completed')) {

            completeBtn.src = "icons/check.svg";
            input.disabled = true;
            input.classList.add('no-caret');
        } else {

            completeBtn.src = "icons/Ellipse 1.svg";
            input.disabled = false;
            input.classList.remove('no-caret');
            input.focus();
        }
    });


    deleteBtn.addEventListener('click', () => {
        task.remove();
    });
}

document.querySelectorAll('.task').forEach(task => {
    activateTask(task);
});
addButton.addEventListener('click', () => {
    const task = document.createElement('div');
    task.classList.add('task');

    task.innerHTML = `
        <img src="icons/Ellipse 1.svg" alt="complete" class="complete-button">
        <input type="text" placeholder="Enter task">
        <img src="icons/cancel.svg" alt="Cancel" class="cancel-button">
    `;

    tasksContainer.appendChild(task);
    activateTask(task);

});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker failed:', err));
}




