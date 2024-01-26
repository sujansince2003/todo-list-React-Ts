import { createContext, useContext } from "react";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
