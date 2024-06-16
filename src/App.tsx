//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import TodoItem from "./components/todoitem"
import { dummyData } from "./data/todos"

function App() {
  //const [count, setCount] = useState(0)
  function setTodoCompleted(id:number, completed:boolean){
    alert(`todo with id ${id} is now ${completed ? "completed" :"not completed"}`);
  }
  return (
    <main className='h-screen px-2 py-10 bg-blue-200 space-y-5'>
      <h1 className="text-3xl font-mono text-center bg-slate-100">
        Your todos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
