/* import "./styles.css"; */
import { Todo, TodoList } from "../classes/index";
import { crearTodoHtml } from "./componentes";
import { city } from "./weather";
export const todoList = new TodoList();

todoList.todos.forEach((todo) => crearTodoHtml(todo));
