import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ItemData {
  task: string;
  done: boolean;
}

interface TodoState {
  list: ItemData[];
}

const initialState: TodoState = {
  list: [
    { task: "clean apartment", done: true },
    { task: "cook food", done: true },
    { task: "apply for jobs", done: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.list.push({ task: action.payload, done: false });
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    removeAll: (state) => {
      state.list = [];
    },
    markAllDone: (state) => {
      state.list.forEach((item) => (item.done = true));
    },
  },
});

// Exporting action creators for every reducer function
export const { addItem, removeItem, removeAll, markAllDone } =
  todoSlice.actions;

// Exporting reducer
export default todoSlice.reducer;
