import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      { task: "clean apartment", done: true },
      { task: "cook food", done: true },
      { task: "apply for jobs", done: false },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push({ task: action.payload, done: false });
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      state.list.splice(action.payload, 1);
    },
  },
});

// Exporting action creators for every reducer function
export const { addItem, removeItem } = todoSlice.actions;

// Exporting reducer
export default todoSlice.reducer;
