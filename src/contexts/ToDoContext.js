import { useContext } from "react";
import { createContext } from "react";
import { ToDoContext } from './ToDoContext';

export const ToDoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "Walking",
            completed : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo: (id, todo) =>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
});

export const useTodo = () =>{
    return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;