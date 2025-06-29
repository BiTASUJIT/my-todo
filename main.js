// QUESTION:
// create a todo app with the below features
// 1. add item
// 2. delete item
// 3. items include [item name, created date (auto capture in the format 25-06-2025, 05:30 PM)]
// 4. sort items in the order of latest at the top

/////////////////////////////////////////////////////

const addItem = document.querySelector("#addItem")
const formTable = document.querySelector("#formTable")
let table = document.querySelector("#tableView")

let tasks = [] 

const createTask = () => {
    const item = document.getElementById("itemText").value
    
    if(item){
        const time = dateTime()
        tasks.unshift({item, time})
        document.getElementById("itemText").value = null
        document.getElementById("noTask").innerHTML= ""
        displayTask()
    }else{
        document.getElementById("noTask").innerHTML = "<span style='color: red;'>Enter Your Task</span>"
    } 
}
const dateTime = () => {
    const now = new Date()       
    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return(`${day}-${month}-${year}, ${hours}:${minutes}:${seconds} ${ampm}`)    
}
const displayTask = () => {    
        const list = document.getElementById("taskList")
        list.innerHTML = ""
        
        tasks.forEach((task, index) =>{
            const taskDiv = document.createElement("div");
            taskDiv.innerHTML = `
            Task : ${task.item} 
            Created on: ${task.time}
            <button id="deleteBtn" onClick="deleteTask(${index})">Delete</button><br><br>` 
            list.appendChild(taskDiv)        
        })        
}
const deleteTask = (index) => {
    tasks = tasks.filter(task => task.item!== tasks[index].item)
    displayTask()
}
addItem.addEventListener("click", createTask)