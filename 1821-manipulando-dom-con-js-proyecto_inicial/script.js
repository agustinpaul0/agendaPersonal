const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anónimas en javaScript
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    const content = 
    //Backticks ${}
    `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

    task.innerHTML = content;

    list.appendChild(task);
    input.value = "";
}

btn.addEventListener("click", createTask);