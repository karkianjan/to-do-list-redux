import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from './store/toDoSlice'

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className=""
        placeholder="Add a todo"
      />
      <button type="submit" className="p-2 rounded-md border bg-blue-500 text-white rounded">
        Click me 
      </button>
    </form>
  );
};

export default AddTodo;