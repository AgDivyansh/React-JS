import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]) ;

  // const 
  const todo = (todo) => {
      setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) ;
  }
  // finding the todo in the array to update it 
  // first we have iterate it using map then match the id which the user has selected to update then if the id is matched then we update that perticular index or todo else part remains the same
  const updatetodo = (id, todo) => {
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo  )) ;
  }


  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
    // console.log(`data user trying to add ${todo}`);
    console.log(todo);
    
    
  }
    const deletetodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id != id )) ;
    }

    const toggleComplete = (id) => {
      setTodos((prev) =>  prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    // local storage store data in local storage using setitem and get item and need to be converted in json every time


    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos")) ;
      

      if (todos && todos.length)
      {
        setTodos(todos) ;
      }
      
    }, [])

    useEffect(() => {

      localStorage.setItem("todos", JSON.stringify(todos)) ;
    }, [todos])
    
  return (
    <TodoProvider
      value={{todo, addTodo, updatetodo, deletetodo, toggleComplete}}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key= {todo.id} className='w-full' >
                <TodoItem todo={todo} />
                 </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
