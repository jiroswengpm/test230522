document.getElementById('add-button').addEventListener('click', function() {
  var value = document.getElementById('todo-input').value;
  if (value) addTodo(value);
});

function addTodo(text) {
  var list = document.getElementById('todo-list');

  var item = document.createElement('li');

  var input = document.createElement('input');
  input.type = 'text';
  input.disabled = true;
  input.value = text;
  input.classList.add('item_input');
  item.appendChild(input);

  var buttons = document.createElement('div');

  var remove = document.createElement('button');
  remove.innerText = 'Remove';
  remove.addEventListener('click', removeTodo);
  buttons.appendChild(remove);

  var edit = document.createElement('button');
  edit.innerText = 'Edit';
  edit.addEventListener('click', editTodo);
  buttons.appendChild(edit);

  item.appendChild(buttons);

  list.appendChild(item);
}

function removeTodo() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function editTodo() {
  var item = this.parentNode.parentNode;
  var input = item.firstChild;
  input.disabled = !input.disabled;
  
  this.innerText = input.disabled ? 'Edit' : 'Save';
}
