// import React from 'react';
// import { useDispatch } from 'react-redux';


// interface TodoProps {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const Todo: React.FC<TodoProps> = ({ id, text, completed }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="flex justify-between items-center p-4 bg-white shadow-md rounded mb-2">
//       <div
//         className={`flex-1 cursor-pointer ${completed ? 'line-through text-gray-500' : ''}`}
//         onClick={() => dispatch(toggleTodo(id))}
//       >
//         {text}
//       </div>
//       <button
//         onClick={() => dispatch(deleteTodo(id))}
//         className="text-red-500 hover:text-red-800 text-lg "
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default Todo;


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from './store/toDoSlice';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  useEffect(() => {
    if (!isEditing) {
      setNewText(text);
    }
  }, [text, isEditing]);

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id, text: newText }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-xl rounded mb-2">
      {isEditing ? (
        <div className="flex-1">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Edit todo"
          />
          <button onClick={handleEdit} className="ml-2 text-blue-500 hover:text-blue-800">
            Save
          </button>
        </div>
      ) : (
        <div
          className={`flex-1 cursor-pointer ${completed ? 'line-through text-gray-500' : ''}`}
          onClick={() => dispatch(toggleTodo(id))}
        >
          {text}
        </div>
      )}
      <div className="flex items-center">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="text-green-500 hover:text-green-800 text-lg mr-2"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(id))}
          className="text-red-500 hover:text-red-800 text-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
