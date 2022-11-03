const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anónimas
const createTask = (evento) => {
    evento.preventDefault();
    console.log("Crear tarea");
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

btn.addEventListener("click", createTask);