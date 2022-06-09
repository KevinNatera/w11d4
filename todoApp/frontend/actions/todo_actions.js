export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

import * as TodoApiUtil from '../util/todo_api_util'

export const receiveTodos = (todos) => {
    // debugger
    return {
        
        type: RECEIVE_TODOS,
        todos,
    };
    // debugger
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    };
};

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo,
    };
};

//Thunk Action Creator
export const fetchAllTodos = () => (dispatch, getState) => (
    TodoApiUtil.getAllTodos().then(todos => {
        return dispatch(receiveTodos(todos))
    })
);