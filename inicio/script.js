import deleteIcon from "./components/deleteIcon.js";
import checkComplete from "./components/checkComplete.js";

const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anónimas en javaScript
//Listeners
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

//Listeners
btn.addEventListener("click", createTask);

//Backticks ${}