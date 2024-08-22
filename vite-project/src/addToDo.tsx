import {useState} from "react";
import React from "react";
import { useDispatch } from 'react-redux';

interface AddToDoProps{
    addToDo: {text : string} => void;
}

const addToDo : React.FC<AddToDoProps> = ({addToDo}) => {
    const[text, setText] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()){
            addToDo(text);
            setText = ('');
        }


    };
    return(
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
          placeholder="Add a todo"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </form>

    )
};
