const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteTodo);

function addTodo(event) {
    event.preventDefault();

    // Create the main todo container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    // Create the button container
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("todo-buttons");


    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    buttonDiv.appendChild(deleteButton); // Add delete button to button container

    // Create complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    buttonDiv.appendChild(completeButton); // Add complete button to button container

    // Create the todo item
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;

    // Append button container and todo item to main container
    todoDiv.appendChild(buttonDiv);
    todoDiv.appendChild(todoItem);

    // Append the todo container to the todo list
    todoList.appendChild(todoDiv);

    // Clear input field
    input.value = "";
}

function deleteTodo(event) {
    const item = event.target; // The clicked element (button or icon)
    
    // Check if the clicked element or its parent is the delete button
    if (item.classList.contains("delete-btn") || item.parentElement.classList.contains("delete-btn")) {
        // Find the todo container to remove
        const delItem = item.closest(".todo-container");
        delItem.remove(); // Remove the entire container
    }
    if (item.classList.contains("complete-btn") || item.parentElement.classList.contains("complete-btn")) {
        // Find the todo container to remove
        const compItem = item.closest(".todo-container");
        compItem.classList.toggle("completed");
    }
}
