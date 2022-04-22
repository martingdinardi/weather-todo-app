/* import "./styles.css"; */
import { Todo, TodoList } from "../classes/index";
import { crearTodoHtml } from "./componentes";

/* ;
const task = new Todo(
  "Enviando una tarea desde JavaScript",
  "Enviando una descripcion de tarea desde JavaScript",
  "./assets/img/grocery-ico.svg"
);

todoList.nuevoTodo(task);

crearTodoHtml(task); */

export const todoList = new TodoList();
/* console.log(todoList.todos.length); */
console.log(todoList);
