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
const no_todo_container = document.querySelector(".no-todo-container");
const complete_button = document.querySelector(".complete-button");
const pending_button = document.querySelector(".pending");
const delete_all_todos_container = document.querySelector(
  ".delete-all-todos-container"
);
let completeIsPressed = false;

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
        <img src="./assets/img/trash.svg" class="todo-svg trash-ico" />
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
    /* console.log(todoList); */
    if (completeIsPressed == false) {
      crearTodoHtml(nuevoTodo);
      no_todo_container.setAttribute("hidden", "");
    }
    create_todo_container.setAttribute("hidden", "");
    /* console.log(todoList.todos.length); */
    if (todoList.todos.length === 1 && completeIsPressed == false) {
      /* console.log("todo 1 length"); */
      /* no_todo_container.setAttribute("hidden", ""); */
    }
  }
});

todo_container.addEventListener("click", (e) => {
  const elemento = e.target.classList[1];
  const todoElemento =
    e.target.parentElement.parentElement.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");
  if (todoId != null) {
    /* todoElemento.classList.toggle("todo-completed"); */
    todo_container.removeChild(todoElemento.parentElement);
    console.log(todoList);
    if (todo_container.childElementCount == 1) {
      no_todo_container.removeAttribute("hidden");
    }
    console.log(todo_container.childElementCount);
  } else if (elemento == "trash-ico") {
    const elementoid =
      e.target.parentElement.parentElement.parentElement.getAttribute(
        "data-id"
      );
    todoList.eliminarTodo(elementoid);
    todo_container.removeChild(todoElemento);
    if (
      /* todoList.todos.length === 0 */ todo_container.childElementCount == 1
    ) {
      /* console.log("todo 1 length"); */
      no_todo_container.removeAttribute("hidden");
    }
  }
  /*   console.log();
  console.log(todoList); */
});

complete_button.addEventListener("click", () => {
  completeIsPressed = true;
  console.log(completeIsPressed);
  delete_all_todos_container.removeAttribute("hidden");
  /* complete_button.classList.toggle("pending-button");
  complete_button.classList.toggle("complete-button"); */
  /* console.log(complete_button.classList[0]); */
  if (complete_button.classList[0] == "complete-button") {
    complete_button.classList.remove("complete-button");
    complete_button.classList.add("pending-button");
    pending_button.classList.remove("pending-button");
    pending_button.classList.add("complete-button");
  }
  /* console.log(complete_button); */
});

pending_button.addEventListener("click", (e) => {
  completeIsPressed = false;
  console.log(completeIsPressed);
  if (pending_button.classList[1] == "complete-button") {
    delete_all_todos_container.setAttribute("hidden", "");
    complete_button.classList.add("complete-button");
    complete_button.classList.remove("pending-button");
    pending_button.classList.add("pending-button");
    pending_button.classList.remove("complete-button");
  }
  /* console.log(pending_button.classList[1]); */
});

delete_all_todos_container.addEventListener("click", () => {
  /* console.log("first"); */
  todoList.eliminarCompletados();
  /* console.log(todoList); */
  for (let i = todo_container.children.length - 1; i >= 0; i--) {
    const elemento_padre = todo_container.children[i];
    const elemento = elemento_padre.children;
    /* console.log(elemento[0]); */
    if (elemento[0].classList.contains("todo-completed")) {
      todo_container.removeChild(elemento_padre);
      if (todoList.todos.length === 0) {
        /* console.log("todo 1 length"); */
        no_todo_container.removeAttribute("hidden");
      }
    }
  }
});
