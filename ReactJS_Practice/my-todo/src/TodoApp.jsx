import { useState } from 'react'

const TodoApp = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = () => {
        const newTodoId = Date.now()
        const trimmedInput = input.trim();

        if (!trimmedInput) return;
        setTodos(prevTodos => {
            return [...prevTodos, { id: newTodoId, val: input }];
        })
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            return handleAdd(e)
        }
    }

    const handleDelete = () => {

    }
    return (
        <div style={{ maxWidth: "400px", margin: "24px auto", fontFamily: "sans-sarif" }}>
            <h1>Todo App</h1>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <input
                    type="text"
                    placeholder="Enter Todo"
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown} />
                <button type="button" onClick={handleAdd} style={{ padding: "8px 12px", fontSize: 16 }}>Add Todo</button>
            </div>
            <div>
                <h3>Todo List: </h3>
                <ul>
                    {todos.length == 0 ?
                        <p style={{ color: "#777" }}>No Todos yet</p>
                        : todos.map((todo) => {
                            return (
                                <div style={{ display: "flex", gap: 6 }} key={todo.id}>
                                    <li style={{ color: "black" }}>{todo}</li>
                                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                </div>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp;




