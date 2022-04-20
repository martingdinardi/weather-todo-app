import { Todo } from "../classes";
import { todoList } from "../src/index";
const todo_container = document.querySelector(".todo-container");
const add_activity = document.querySelector(".add-activity");
const app_container = document.querySelector(".app-container");
const create_todo_container = document.querySelector(".create-todo-container");
const arrow_icon = document.querySelector(".arrow-icon");
const icons_to_select = document.querySelector(".icons-to-select");
const icon_to_select = document.querySelectorAll(".icon-to-select");
const icon_selected = document.querySelector(".icon-selected");
const title_input = document.querySelector(".create-todo-title");
const create_todo_description = document.querySelector(
  ".create-todo-description"
);
const create_todo_confirm = document.querySelector(".create-todo-confirm");
const selected_ico = document.querySelector(".selected-ico");
/* const checkbox = document.querySelector(".check"); */

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <div class="todo-item ${todo.completado ? "todo-completed" : ""}" data-id=${
    todo.id
  }>
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
        <p class="todo-time"><input type="checkbox" class="check"></p>
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
    /*  console.log(e.target.src);
    console.log(e.target); */
    icons_to_select.setAttribute("hidden", "");
    arrow_icon.classList.remove("rotate");
    icon_selected.innerHTML = `<img src=${e.target.src} class="icon selected-ico"> `;
  });
});

create_todo_confirm.addEventListener("click", (e) => {
  if (
    title_input.value.length > 0 &&
    create_todo_description.value.length > 0
  ) {
    const nuevoTodo = new Todo(
      title_input.value,
      create_todo_description.value,
      icon_selected.children[0].src
    );
    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList);
    crearTodoHtml(nuevoTodo);
    create_todo_container.setAttribute("hidden", "");
    /* console.log(icon_selected[0]); */
  }
});

todo_container.addEventListener("click", (e) => {
  const elemento = e.target.localName;
  const todoElemento =
    e.target.parentElement.parentElement.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");
  if (todoId != null) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("todo-completed");
  }
});
