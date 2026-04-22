import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'
function App() {
  
  const[todos,setTodo]=useState([])

  const addTodo=(todo)=>{
    setTodo((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(
      prevTodo.id===id?todo:prevTodo
    )))
  }

  const deleteTodo=(id)=>
  {
    setTodo((prev)=>prev.filter((todo)=>todo.id!==id)
    )
  }

 const toggleComplete=(id)=>{setTodo(todos.map(prevTodo =>
    prevTodo.id === id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo
))}

useEffect(() => {
const storedTodos = JSON.parse(localStorage.getItem('todos'))
if (storedTodos && storedTodos.length > 0) {
setTodo(storedTodos)
}
}, [])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  return (
<TodoProvider value={{ 
  todos, 
  addTodo, 
  updateTodo, 
  deleteTodo, 
  toggleComplete 
}}>     <div className='bg-[#172842] min-h-screen py-8'>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
        <h1 className='text-2xl font-bold text-center mb-8 mt-2'> Manage ToDos</h1>
        <div className='mb-4'>
        <TodoForm></TodoForm>
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {
            todos.map((todo)=>(
              <div key={todo.id} className='w-full'>

              <TodoItem todo ={todo}/>

                </div>
            ))
          }
        </div>
        
      </div>

     </div>
    </TodoProvider>
  )
}

export default App
