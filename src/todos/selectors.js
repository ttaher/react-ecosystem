import { createSelector } from 'reselect';
export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

export const getIncompletedTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos, isLoading) => todos.filter(todo => !todo.isCompleted),
);


export const getCompletedTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos, isLoading) => todos.filter(todo => todo.isCompleted),
);