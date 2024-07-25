'use client'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input 
                type="text" 
                value={editText} 
                onChange={(e) => setEditText(e.target.value)} 
              />
              <button onClick={() => handleUpdate(todo.id)}>Update</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
