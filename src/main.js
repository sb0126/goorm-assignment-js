import "./styles/main.scss";

const addTodoBtn = document.querySelector(".header__add-todo");
const todos = document.querySelector(".todos");
const originTodo = document.querySelector(".todo");
const clonedTodoProto = originTodo.cloneNode(true);
const deleteTodoBtn = document.querySelector(".todo__delete");
const todoCheckbox = document.querySelector(".todo__check-box");

originTodo.id = Date.now();

const addTodo = () => {
  createTodoContainer();
}

const deleteTodo = (event) => {
  const todo = event.target.parentNode;
  todo.remove();
}

const checkTodo = (event) => {
  const todo = event.target.parentNode;
  const todoContent = todo.querySelector(".todo__content");
  todoContent.classList.toggle("todo__content--checked");
}

const createTodoContainer = () => {
  const clonedTodo = clonedTodoProto.cloneNode(true);
  const clonedTodoDeleteBtn = clonedTodo.querySelector(".todo__delete");
  const clonedTodoCheckbox = clonedTodo.querySelector(".todo__check-box");
  clonedTodo.id = Date.now();
  clonedTodoDeleteBtn.addEventListener("click", deleteTodo);
  clonedTodoCheckbox.addEventListener("change",checkTodo);
  todos.appendChild(clonedTodo);
}



addTodoBtn.addEventListener("click", addTodo);
deleteTodoBtn.addEventListener("click", deleteTodo);
todoCheckbox.addEventListener("change", checkTodo);