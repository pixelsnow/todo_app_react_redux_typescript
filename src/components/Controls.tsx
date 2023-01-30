import React from "react";
import { useDispatch } from "react-redux";

import {
  removeAll,
  removeDone,
  markAllDone,
} from "../features/todo_list/todoSlice";

const Controls = () => {
  const dispatch = useDispatch();

  const markAll = () => {
    dispatch(markAllDone());
  };

  const clearDone = () => {
    dispatch(removeDone());
  };

  const clearAll = () => {
    dispatch(removeAll());
  };

  return (
    <div>
      <button onClick={markAll}>Mark all done</button>
      <button onClick={clearDone}>Clear done</button>
      <button onClick={clearAll}>Clear all</button>
    </div>
  );
};

export default Controls;
