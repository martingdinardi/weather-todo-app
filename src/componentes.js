const todo_container = document.querySelector(".todo-container");
const add_activity = document.querySelector(".add-activity");
const app_container = document.querySelector(".app-container");
const create_todo_container = document.querySelector(".create-todo-container");
const arrow_icon = document.querySelector(".arrow-icon");
const icons_to_select = document.querySelector(".icons-to-select");
const icon_to_select = document.querySelectorAll(".icon-to-select");
const icon_selected = document.querySelector(".icon-selected");

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <div class="todo-item ${todo.completado ? "todo-completed" : ""}">
    <div class="todo-item-content">
      <div class="todo-label"></div>
      <div class="todo-icon">
        <img src=${todo.tarea_icono} class="todo-svg" />
      </div>
      <div class="todo-description-container">
        <p class="todo-title">${todo.tarea_titulo}</p>
        <p class="todo-description">
          ${todo.tarea_description}
        </p>
      </div>
      <div class="todo-time-container">
        <p class="todo-time">${todo.tarea_time}</p>
      </div>
    </div>
  </div>
    `;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  todo_container.append(div);

  return div;
};

//Events
add_activity.addEventListener("click", () => {
  create_todo_container.removeAttribute("hidden");
});

arrow_icon.addEventListener("click", () => {
  arrow_icon.classList.toggle("rotate");
  icons_to_select.removeAttribute("hidden");
});

icon_to_select.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.src);
    console.log(e.target);
    icons_to_select.setAttribute("hidden", "");
    arrow_icon.classList.remove("rotate");
    icon_selected.innerHTML = `<img src=${e.target.src} class="icon"> `;
  });
});
