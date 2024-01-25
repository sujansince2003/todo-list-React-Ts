

import { createContext,useContext } from "react";


export interface Todo {
   id: number;
    todo: string;
    completed: boolean;
  
  }


export const TodoContext=createContext(
    {
todos:[
    {
        id:1,
        todo:"Learn react context",
        completed:false
    }
],
addTodo:(todo:Todo)=>{},
updateTodo:(id:number,todo:Todo)=>{},
deleteTodo:(id:number)=>{},
toggleTodo:(id:number)=>{},
    }
)

export const TodoContextProvider=TodoContext.Provider

export function useTodo()
{
    return useContext(TodoContext)
}

// eslint-enable no-unused-vars