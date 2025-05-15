import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatetodo: (id, todo) => {},
    deletetodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider