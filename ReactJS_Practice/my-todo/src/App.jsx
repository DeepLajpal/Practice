import './App.css'
import { useState } from 'react'
import TodoApp from './TodoApp'

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleAddTodo = (e) => {
    handle
  }
  return (
    <>
      <TodoApp />
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            return handleAddTodo(e)
          }
        }} />
    </>
  )
}

export default App
