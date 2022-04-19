/* import "./styles.css"; */
import { Todo, TodoList } from "../classes/index";
import { crearTodoHtml } from "./componentes";

const todoList = new TodoList();
const task = new Todo(
  "Enviando una tarea desde JavaScript",
  "./assets/img/grocery-ico.svg",
  "Enviando una descripcion de tarea desde JavaScript",
  "8:00"
);

todoList.nuevoTodo(task);

console.log(todoList);

crearTodoHtml(task);
