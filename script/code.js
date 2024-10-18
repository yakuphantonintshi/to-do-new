let todoList = [];
let id = 0;

document.getElementById('add-item').addEventListener('click', () => {
  let newItem = document.getElementById('new-item').value.trim();
  if (newItem) {
    todoList.push({ id: id++, text: newItem });
    todoList.sort((a, b) => a.text.localeCompare(b.text));
    displayList();
    document.getElementById('new-item').value = '';
  }
});

document.getElementById('sort-item').addEventListener('click', () => {
  todoList.sort((a, b) => a.text.localeCompare(b.text));
  displayList();
});

function restrictNumbers(input) {
  input.value = input.value.replace(/[^A-Za-z]/g, '');
}

function displayList() {
  let listElement = document.getElementById('todo-list');
  listElement.innerHTML = '';
  todoList.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.textContent = item.text;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      todoList = todoList.filter((todo) => todo.id!== item.id);
      displayList();
    });
    listItem.appendChild(deleteButton);
    listElement.appendChild(listItem);
  });
}