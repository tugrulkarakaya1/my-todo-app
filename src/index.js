let todos = [];

// ❌ Örnek gizli bilgi (dummy API key gibi)
//const API_SECRET_KEY = "mysecretapikey12345";
//const PASSWORD = "sifrem"
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

module.exports = { addTodo, listTodos, clearTodos, API_SECRET_KEY };

if (require.main === module) {
  console.log("Todo App Çalışıyor 🚀");
  addTodo("Workflow hazırla");
  console.log("Todos:", listTodos());

  // secret key konsola yazdırma (sadece test için!)
  console.log("Secret Key:", API_SECRET_KEY);
}
