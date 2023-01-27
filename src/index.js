import './styles/styles.css';

const input = document.getElementById('myInput');
const add = document.querySelector('.addBtn');
const list = document.querySelector('.myList');

function todoList() {
  const text = input.value;
  list.innerHTML += `${text} <br> <br>`;
}
add.addEventListener('click', () => {
  todoList();
});
