import "./styles/main.scss";

const addTodoBtn = document.querySelector(".header__add-todo");
const todos = document.querySelector(".todos");
const originTodo = document.querySelector(".todo");
const clonedTodoProto = originTodo.cloneNode(true);
const todoContent = originTodo.querySelector(".todo__content");
const todoEditBtn = originTodo.querySelector(".todo__edit");
const deleteTodoBtn = originTodo.querySelector(".todo__delete");
const todoCheckbox = originTodo.querySelector(".todo__check-box");

let todosLocalstorage = [];

todoContent.id = Date.now();
todoEditBtn.setAttribute("for", todoContent.id);


const setTodo = (event) => {
  console.log(event);
    const targetTodo = event.target.parentNode;
    const targetContent = targetTodo.querySelector(".todo__content");
    const targetCheckBox = targetTodo.querySelector(".todo__check-box");
    const todoData = {
      id : targetContent.id,
      value : targetContent.value,
      checked : targetCheckBox.checked,
    }
    todosLocalstorage = todosLocalstorage.filter((todo) => todo.id != todoData.id);
    if (todoData.value.trim() !== "") {
      todosLocalstorage.push(todoData);
    }
    localStorage.setItem("todos", JSON.stringify(todosLocalstorage));
}

const getTodos = () => {
  todosLocalstorage = JSON.parse(localStorage.getItem("todos")) || [];
  if (todosLocalstorage.length != 0) {
    todosLocalstorage.forEach((index) => setTodos(index.id, index.value, index.checked));
  }
  
}
const setTodos = (id, value, checked) => {
  const clonedTodo = clonedTodoProto.cloneNode(true);
  const clonedTodoDeleteBtn = clonedTodo.querySelector(".todo__delete");
  const clonedTodoCheckbox = clonedTodo.querySelector(".todo__check-box");
  const clonedTodoEditBtn = clonedTodo.querySelector(".todo__edit");
  const clonedTodoContent = clonedTodo.querySelector(".todo__content");
  clonedTodoContent.id = id;
  clonedTodoEditBtn.setAttribute("for", clonedTodoContent.id);
  clonedTodoContent.addEventListener("change", setTodo);
  clonedTodoContent.value = value;
  clonedTodoDeleteBtn.addEventListener("click", deleteTodo);
  clonedTodoCheckbox.checked = checked;
  if (checked) {
    clonedTodoContent.classList.add("todo__content--checked");
  }
  clonedTodoCheckbox.addEventListener("change",checkTodo);
  todos.appendChild(clonedTodo);
}


const addTodo = () => {
  createTodoContainer();
}

const deleteTodo = (event) => {
  const todo = event.target.parentNode;
  const todoContent = todo.querySelector(".todo__content");
  todosLocalstorage = todosLocalstorage.filter((index) => index.id != todoContent.id);
  localStorage.setItem("todos", JSON.stringify(todosLocalstorage));
  todo.remove();
}

const checkTodo = (event) => {
  const todo = event.target.parentNode;
  const todoContent = todo.querySelector(".todo__content");
  todoContent.classList.toggle("todo__content--checked");
  setTodo(event);
}

const createTodoContainer = () => {
  const clonedTodo = clonedTodoProto.cloneNode(true);
  const clonedTodoDeleteBtn = clonedTodo.querySelector(".todo__delete");
  const clonedTodoCheckbox = clonedTodo.querySelector(".todo__check-box");
  const clonedTodoEditBtn = clonedTodo.querySelector(".todo__edit");
  const clonedTodoContent = clonedTodo.querySelector(".todo__content");
  clonedTodoContent.id = Date.now();
  clonedTodoEditBtn.setAttribute("for", clonedTodoContent.id);
  clonedTodoContent.addEventListener("change", setTodo);
  clonedTodoDeleteBtn.addEventListener("click", deleteTodo);
  clonedTodoCheckbox.addEventListener("change",checkTodo);
  todos.appendChild(clonedTodo);
}


getTodos();
if (todosLocalstorage.length != 0) {
  originTodo.style.display = "none";
}


addTodoBtn.addEventListener("click", addTodo);
deleteTodoBtn.addEventListener("click", deleteTodo);
todoCheckbox.addEventListener("change", checkTodo);
todoContent.addEventListener("change", setTodo);