import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToDo{
id : number
text: string
completed: boolean

}

interface ToDoState{
    todos :  ToDo[];
}

const initialState : ToDoState ={
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
        const newTodo: ToDo = {
          id: Date.now(),
          text: action.payload,
          completed: false,
        };
        state.todos.push(newTodo);
      },
      toggleTodo: (state, action: PayloadAction<number>) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
    },
  });
  
  export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
  export default todoSlice.reducer;