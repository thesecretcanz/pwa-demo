const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      todos.splice(index, 1);
      updateTodos();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function updateTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

form.onsubmit = (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    todos.push(value);
    updateTodos();
    input.value = "";
  }
};

renderTodos();
