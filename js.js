//add button
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
    alert("Add button clicked!");
}

//clear button
let clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    alert("Clear button clicked");
}
//empty list button
let emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList)

function emptyList() {
    alert("Empty button clicked");
}

//save list button
let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

function saveList() {
    alert("Save list clicked");
}

//variables to select the text box and the list
let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

//function to create new to do item
function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if(completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

//function to add to do item
function addToDoItem() {
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}