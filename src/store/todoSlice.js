import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      let id = state.length;
      const { title, text } = action.payload;
      state.push({ id, title, text });
    },
    deleteTodo(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const notesList = (state) => state.todos;
export default todosSlice.reducer;
