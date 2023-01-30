import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo_list/todoSlice";

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todoList.list;
