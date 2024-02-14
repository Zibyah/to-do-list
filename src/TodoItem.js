import React, { useState } from 'react';
import './styles.css';
import './App.css';

const TodoItem = ({ item, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoText, setNewTodoText] = useState(item.text);

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Handle save changes logic
    // You can update the state or perform other actions here
    console.log('Saving changes:', newTodoText);

    // Reset editing state after saving changes
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${item.completed ? 'completed' : ''}`} onClick={() => onToggleComplete(item.id)}>
      <label className="custom-checkbox">
        <input type="checkbox" checked={item.completed} onChange={() => onToggleComplete(item.id)} />
        <span className="checkmark"></span>
      </label>

      {isEditing ? (
        // Render input field when editing is enabled
        <div>
          <input type="text" value={newTodoText} onChange={handleInputChange} placeholder="Edit todo" />
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        // Render todo text
        <span onClick={handleToggleEditing}>{item.text}</span>
      )}
    </div>
  );
};

export default TodoItem;
