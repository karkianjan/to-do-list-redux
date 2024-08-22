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
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4 ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-red-500"
        placeholder="Add a todo"
      />
      <button type="submit" className="p-2   bg-blue-500  text-white border rounded-lg hover:bg-white hover:text-black ">
       Click to Add
      </button>
    </form>
  );
};

export default AddTodo;