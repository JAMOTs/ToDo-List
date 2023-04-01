const form = document.querySelector("#todoForm");
const input = document.querySelector('#todoTask');
const ul = document.querySelector('#todoList');
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

function creatLi() {
const li = document.createElement('li');
li.textContent = input.value + " "
const removeBtn = document.createElement('button')
removeBtn.textContent = 'Remove';
li.appendChild(removeBtn)
li.classList.add('todo')
savedTodos.push({ task: li.innerText, isCompleted: false });
localStorage.setItem("todos", JSON.stringify(savedTodos));
// localStorage.setItem("todos", JSON.stringify(savedTodos));
return li;
}

for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    task = savedTodos[i].task;
    newTodo.innerText = task;
    newTodo.setAttribute("id", i);
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove';
    newTodo.appendChild(removeBtn)
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
  }



form.addEventListener("submit", function(event) {
  event.preventDefault();
  const li = creatLi();
  if(input.value.trim() === '') {
    alert('Please Enter a Task!');
  } else {
        ul.appendChild(li);
    }
    form.reset();
});

ul.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
        savedTodos[event.target.id].isCompleted = true;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
})

ul.addEventListener('click', function(event) {
    if(event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
        savedTodos.splice(event.target.parentElement.id, 1);
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
})