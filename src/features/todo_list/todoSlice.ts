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
    { task: "clean apartment", done: false },
    { task: "cook food", done: true },
    { task: "apply for jobs", done: false },
    { task: "make tea", done: false },
    { task: "go to sleep on time", done: true },
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
    removeDone: (state) => {
      state.list = state.list.filter((item) => item.done === false);
    },
    markAllDone: (state) => {
      state.list.forEach((item) => (item.done = false));
    },
    toggleDone: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.list[action.payload].done = !state.list[action.payload].done;
    },
  },
});

// Exporting action creators for every reducer function
export const {
  addItem,
  removeItem,
  removeAll,
  removeDone,
  markAllDone,
  toggleDone,
} = todoSlice.actions;

// Exporting reducer
export default todoSlice.reducer;
