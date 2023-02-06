import React from "react";
import { useDispatch } from "react-redux";

import {
  removeAll,
  removeDone,
  markAllDone,
} from "../features/todo_list/todoSlice";

import classes from "./Controls.module.css";

const Controls: React.FC = () => {
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
    <div className={classes.buttons}>
      <button onClick={markAll}>Mark all done</button>
      <button onClick={clearAll}>Clear all</button>
      <button onClick={clearDone}>Clear done</button>
    </div>
  );
};

export default Controls;
