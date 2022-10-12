const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const todos = document.querySelector('.todo');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let val = input.value.trim();

  if (val) {
    addTodoElement({
      text: val,
    });
    saveTodoList();
  }

  input.value = '';
});

function addTodoElement(todo) {
  let li = document.createElement('li');
  li.innerHTML = `
    <span>${todo.text}</span>
    <i class="fa-sharp fa-solid fa-trash"></i>`;

  if (todo.status === 'completed') {
    li.setAttribute('class', 'completed');
  }

  li.addEventListener('click', function (e) {
    this.classList.toggle('completed');
    saveTodoList();
  });

  li.querySelector('i').addEventListener('click', function (e) {
    this.parentElement.remove();
    saveTodoList();
  });

  todos.appendChild(li);
}

function saveTodoList() {
  let todoList = document.querySelectorAll('li');
  let todoStorage = [];
  todoList.forEach((item) => {
    let text = item.querySelector('span').innerText;
    let status = item.getAttribute('class');

    todoStorage.push({
      text,
      status,
    });
  });
  localStorage.setItem('todoList', JSON.stringify(todoStorage));
}

function init() {
  let data = JSON.parse(localStorage.getItem('todoList'));
  data.forEach((item) => {
    addTodoElement(item);
  });
}

init();
