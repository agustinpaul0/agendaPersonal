( () => {
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

        const content = 
        //Backticks ${}
        `<i class="fas fa-trash-alt trashIcon icon"></i>`;
        //task.innerHTML = content;
        
        task.appendChild(taskContent);
        list.appendChild(task);
    }

    //Listeners
    btn.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    }

    //Utilización de Immediately invoked function expression or IIFE
    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }
}) ()

