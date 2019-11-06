import React, { useState, useReducer } from 'react';
import { initialState, myReducer } from '../reducers/myReducer';

export default function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(myReducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div className='todo-container'>
            <h1>To Do List</h1>
            <div className='todo-form'>
                <input
                    className='todo-input'
                    type='text'
                    name='newTodoText'
                    placeholder='add todo'
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button
                    onClick={() => {
                        dispatch({ type: 'ADD', payload: newTodo });
                        setNewTodo('');
                    }}
                >Add Todo</button>

                <button
                    onClick={() => {
                        dispatch({ type: 'CLEAR' });
                        setNewTodo('');
                    }}
                >Clear Completed</button>

            </div>
            {state.todos.map(todo => (
                <div className={todo.completed ? 'item completed' : 'item'}
                    onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}>
                    {''}
                    {todo.item}{''}
                </div>
            ))}{''}

        </div>
    );
};