
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
            <button class="complete-button">Complete</button>
        `;

        // Add event listener to delete task
        taskItem.querySelector(".delete-button").addEventListener("click", () => {
            taskItem.remove();
        });

        // Add event listener to complete task
        taskItem.querySelector(".complete-button").addEventListener("click", () => {
            taskItem.classList.toggle("complete");
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

// Event listener for adding a task
addTaskButton.addEventListener("click", addTask);

// Event listener for pressing Enter to add a task
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
