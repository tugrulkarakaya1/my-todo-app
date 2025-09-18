let todos = [];

function addTodo(task) {
  todos.push(task);
  return todos;
}

function listTodos() {
  return todos;
}

function clearTodos() {
  todos = [];
  return todos;
}

module.exports = { addTodo, listTodos, clearTodos };

if (require.main === module) {
  console.log("Todo App Çalışıyor 🚀");
  addTodo("Workflow hazırla");
  console.log("Todos:", listTodos());
}
