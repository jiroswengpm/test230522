document.getElementById('add-button').addEventListener('click', function() {
  var value = document.getElementById('todo-input').value;
  if (value) addTodo(value);
});

function addTodo(text) {
  var list = document.getElementById('todo-list');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');

  var remove = document.createElement('button');
  remove.innerText = 'Remove';
  remove.addEventListener('click', removeTodo);
  buttons.appendChild(remove);

  item.appendChild(buttons);

  list.appendChild(item);
}

function removeTodo() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

