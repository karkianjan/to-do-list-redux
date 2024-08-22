import React from 'react';
import Todo from './toDo';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="">
      {todos.map((todo) => (
        <Todo
         key={todo.id} 
         id={todo.id}
         text={todo.text} 
         completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;