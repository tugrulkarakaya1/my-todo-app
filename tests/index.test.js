const { addTodo, listTodos, clearTodos } = require("../src/index");

beforeEach(() => {
  clearTodos();
});

test("todo ekleme", () => {
  addTodo("Test yaz");
  expect(listTodos()).toContain("Test yaz");
});

test("todo temizleme", () => {
  addTodo("Silinecek");
  clearTodos();
  expect(listTodos()).toHaveLength(0);
});

