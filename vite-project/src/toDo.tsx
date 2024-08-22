import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './store/toDoSlice';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded mb-2">
      <div
        className={`flex-1 cursor-pointer ${completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => dispatch(toggleTodo(id))}
      >
        {text}
      </div>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="text-red-500 hover:text-red-800 text-lg "
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;