import React from 'react';
import AddToDo from './addToDo';
import './App.css'
import TodoList from './toDoList'

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <AddToDo/>
      <TodoList/>     
    </div>
  );
}
export default App
