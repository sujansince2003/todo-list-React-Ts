import { useState } from "react";
import "./App.css";
import { TodoContextProvider, Todo } from "./Contexts";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  function addTodo(todo: Todo) {
    setTodos((prev) => [...prev, { ...todo, id: Date.now() }]);
  }
  function updateTodo(id: number, todo: Todo) {
    setTodos((prev) =>
      prev?.map((prevTodo: Todo) => (prevTodo.id === id ? todo : prevTodo))
    );
  }

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo: Todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo: Todo) => todo.id !== id));
  }

  return (
    <TodoContextProvider
      value={{ todos, addTodo, toggleTodo, deleteTodo, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
