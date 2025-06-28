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

const createTask = () => {
        let task = {
        item : document.getElementById("itemText").value,
        time : dateTime()
    }
    if(!task.item){
        document.getElementById("noTask").innerHTML = "<span style='color: red;'>Enter Your Task</span>"
    }else{        
        document.getElementById("noTask").innerHTML = ""
        document.getElementById("itemText").value = null
        displayTask(task)
    }    
}
const displayTask = (task) => {    
        let tr = table.insertRow(0)
        let td1 = tr.insertCell(0)
        let td2 = tr.insertCell(1)
        let td3 = tr.insertCell(2)
        td1.innerHTML = task.item
        td2.innerHTML = task.time
        td3.innerHTML = `<button id="deleteBtn" onClick="table.deleteRow(parentNode.parentNode.rowIndex)">Delete</button>`
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
addItem.addEventListener("click", createTask)


