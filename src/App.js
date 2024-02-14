// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Meditation', completed: true },
    { id: 2, text: 'Pick up Anna', completed: false },
    { id: 3, text: 'Set up meeting with Jay', completed: false },
    { id: 4, text: 'Finish daily UI', completed: false },
    { id: 5, text: 'Second edits on article', completed: false },
    { id: 6, text: 'Email Chris', completed: true },
  ]);

  const [showNewTodoInput, setShowNewTodoInput] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, text: newTodoText, completed: false },
      ]);
      setNewTodoText('');
    }
    setShowNewTodoInput(false);
  };

  return (
    <div className="App">
      <h2>TODAY</h2>
      <button className='plus' onClick={() => setShowNewTodoInput(true)}>+</button>
      {showNewTodoInput && (
        <div>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Type a new todo"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
      )}
      <progress value={todos.filter((todo) => todo.completed).length} max={todos.length}></progress>
      <p className="percentage">{`${Math.round((todos.filter((todo) => todo.completed).length / todos.length) * 100)}% complete`}</p>
      <TodoList todos={todos} onToggle={handleToggle} />
      <p>Pull from recurring list</p>
      <button style={{ backgroundColor: '#f5ed84' }}>Daily</button>
      <button style={{ backgroundColor: '#b5ea81' }}>Weekly</button>
      <button style={{ backgroundColor: '#f8aaaa' }}>Monthly</button>
      <button style={{ backgroundColor: '#b3b3ef' }}>Occasional</button>
    </div>
  );
};

export default App;
