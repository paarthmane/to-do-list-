// selects button and container to manipulate 
let addButton = document.querySelector(".btn")
let emptyContainer = document.querySelector(".container")


addButton.addEventListener("click" , () =>{
    //selecting the input field to get the text (task) from
    let inputText = document.querySelector(".addtask")

// creates new p tag which is task and creates delete button 
    let newTask = document.createElement("p")
    let deleteButton = document.createElement("button")
    // all the tasks inside container is a list of tasks 
    let itemList = document.createElement("ul")
    let list = document.createElement("li")
    //appends the list item inside list 
    itemList.appendChild(list)

    // apppends the p tag (task) and button inside our li tag 
    list.appendChild(newTask)
    list.appendChild(deleteButton)

    // text from input 
    newTask.innerHTML = inputText.value
    deleteButton.innerHTML = "delete"

    // adding list items to the container
    emptyContainer.appendChild(itemList)

    // deletes the task after clicking on delete button 
    // removes list item from the container 
    deleteButton.addEventListener("click", () =>{
        emptyContainer.removeChild(itemList)
       
    })
})