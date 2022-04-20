/* import "./styles.css"; */
import { Todo, TodoList } from "../classes/index";
import { crearTodoHtml } from "./componentes";

export const todoList = new TodoList();
const task = new Todo(
  "Enviando una tarea desde JavaScript",
  "Enviando una descripcion de tarea desde JavaScript",
  "./assets/img/grocery-ico.svg"
);

todoList.nuevoTodo(task);

console.log(todoList);

crearTodoHtml(task);
