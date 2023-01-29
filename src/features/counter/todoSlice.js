import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

// Exporting action creators for every reducer function
export const {} = todoSlice.actions;

// Exporting reducer
export default todoSlice.reducer;
