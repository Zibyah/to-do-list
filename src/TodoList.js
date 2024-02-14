import React from 'react';
import './styles.css';
import './App.css';

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos && todos.map((todo) => (
        <li key={todo.id} style={{ listStyleType: 'none' }}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
