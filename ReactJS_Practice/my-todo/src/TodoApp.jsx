import { useState } from 'react'

const TodoApp = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = () => {
        const trimmed = input.trim();
        if (!trimmed) return;
        setTodos(prevTodos => {
            return [...prevTodos, input]
        })
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            return handleAdd(e)
        }
    }
    return <div>
        <h1>Todo App</h1>
        <input
            type="text"
            placeholder="Enter Todo"
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown} />
        <button type="button" onClick={handleAdd}>Add Todo</button>
        <div>
            <h3>Todo List: </h3>
            <ul>
                {todos.length == 0 ?
                    <p style={{ color: "#777" }}>No Todos yet</p>
                    : todos.map((todo, index) => {
                        return <li style={{ color: "black" }} key={index}>{todo}</li>
                    })}
            </ul>
        </div>
    </div>
}

export default TodoApp;




