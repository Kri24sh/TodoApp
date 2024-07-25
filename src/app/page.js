'use client'
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';



export default function Home() {
  return (
    <main >
      <div className="app">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      </div>
    </main>
  );
}
