import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert } from './thunks';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompeletedPressed,onDisplayAlertClicked }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompeletedPressed={onCompeletedPressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompeletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: () => dispatch(displayAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);