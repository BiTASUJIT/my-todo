// QUESTION:
// create a todo app with the below features
// 1. add item
// 2. delete item
// 3. items include [item name, created date (auto capture in the format 25-06-2025, 05:30 PM)]
// 4. sort items in the order of latest at the top

/////////////////////////////////////////////////////

const formTable = document.querySelector("#formTable")
const textInput = document.querySelector("#textInput")
const addTextBtn = document.querySelector("#addText")
const noText = document.querySelector("#noText")
const taskList = document.querySelector("#taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [] 

const addTask = () => {
    //console.log(tasks)
    const item = textInput.value    
    if(!item){
        noText.innerHTML = "<span style='color: red;'>Enter Your Task</span>"
    }else{
        const dupliactae = tasks.filter(task => task.item.toLowerCase() === item.toLowerCase())
        if(dupliactae.length===0){
            const time = currentTime()
            tasks.unshift({item, time})
            textInput.value = null
            noText.innerHTML= ""            
            localSave()
            displayTask()
        }else{
            noText.innerHTML = "<span style='color: red;'>Duplicate Task</span>"
        }
    }    
}

const displayTask = () => {    
        taskList.innerHTML = ""        
        tasks.forEach((task, index) =>{
            const taskDiv = document.createElement("div");
            taskDiv.innerHTML = `
            Task : ${task.item} 
            Created on: ${task.time}
            <button id="deleteBtn" onClick="deleteTask(${index})">Delete</button><br><br>` 
            taskList.appendChild(taskDiv)        
        })        
}

const deleteTask = (index) => {
    tasks = tasks.filter(task => task.item!== tasks[index].item)
    localSave()
    displayTask()
}

const currentTime = () => {
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

const localSave = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

addTextBtn.addEventListener("click", addTask)
displayTask()