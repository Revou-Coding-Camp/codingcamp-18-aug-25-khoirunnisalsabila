const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const filterInput = document.getElementById('filter-input');
const todoBody = document.getElementById('todo-body');
const deleteAllBtn = document.getElementById('delete-all');

// Add Task
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = taskInput.value.trim();
  const date = dateInput.value;

  if (task === '' || date === '') {
    alert('Please enter both task and date!');
    return;
  }

  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${task}</td>
    <td>${date}</td>
    <td class="status">Pending</td>
    <td>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  todoBody.appendChild(tr);

  taskInput.value = '';
  dateInput.value = '';
});

// Actions: Complete & Delete
todoBody.addEventListener('click', function(e) {
// Delete Task
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('tr').remove();
  }

  if (e.target.classList.contains('complete-btn')) {
    const row = e.target.closest('tr');
    const statusCell = row.querySelector('.status');
    statusCell.textContent = 'Done';
    statusCell.style.color = 'green';
    e.target.disabled = true; 
  }
});

// Delete All Tasks
deleteAllBtn.addEventListener('click', function() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    todoBody.innerHTML = '';
  }
});

// Filter Tasks
filterInput.addEventListener('keyup', function(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('#todo-body tr').forEach(function(row) {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.indexOf(text) !== -1 ? '' : 'none';
  });
});
