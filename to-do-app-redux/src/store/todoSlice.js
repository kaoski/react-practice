import { createSlice } from "@reduxjs/toolkit";
import { generateTestData } from "../utils/utils";

const todoSlice = createSlice({
  name: "todo",
  initialState: generateTestData(),
  reducers: {
    addTodo: (state, { payload }) => {
      state.push({ id: payload.id, title: payload.title });
    },
    removeTodo: (state, payload) =>
      (state = state.filter((todo) => todo.id !== payload.id)),
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
