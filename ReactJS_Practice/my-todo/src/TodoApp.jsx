import { useState, useEffect } from 'react'

const TodoApp = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = () => {
        const newTodoId = Date.now()
        const trimmedInput = input.trim();

        if (!trimmedInput) return;
        setTodos(prevTodos => {
            return [...prevTodos, { id: newTodoId, val: trimmedInput }];
        })
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            return handleAdd(e)
        }
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo?.id != id);
        setTodos(updatedTodos);
    }

    const handleEdit = (id) => {
        const newVal = prompt(`Please Enter new value for id: ${id}`);
        const found = todos.find((todo) => {
            return todo?.id == id
        });
        if (!found) return;
        const newTodos = todos?.map((todo) => {
            if (todo?.id == id) {
                return { id: id, val: newVal }
            }
            return todo;
        })

        setTodos(newTodos);
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

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
                                <li style={{ display: "flex", gap: 6, color: "black" }} key={todo?.id}>
                                    <span>{todo?.val}</span>
                                    <button onClick={() => handleDelete(todo?.id)}>Delete</button>
                                    <button onClick={() => handleEdit(todo?.id)}>Edit</button>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp;




