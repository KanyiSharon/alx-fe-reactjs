import React, { useState } from 'react';

// TodoList Component
const TodoList = () => {
    // Initialize state with a few todos
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
        { id: 3, text: 'Master JavaScript', completed: false },
    ]);

    const [newTodo, setNewTodo] = useState("");

    // Method to add a new todo
    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo(""); // Clear input field
        }
    };

    // Method to toggle the completion status of a todo
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Method to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            
            <input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => toggleTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
