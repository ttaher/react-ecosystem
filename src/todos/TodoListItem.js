import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompeletedPressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {
                todo.isCompleted ? null : <button onClick={() => onCompeletedPressed(todo.text)} className="completed-button">Mark As Completed</button>
            }
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;