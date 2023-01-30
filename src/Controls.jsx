import React from "react";
import { useDispatch } from "react-redux";

import { removeAll, markAllDone } from "./features/counter/todoSlice";

const Controls = () => {
  const dispatch = useDispatch();

  const markAll = () => {
    dispatch(markAllDone());
  };
  const clearAll = () => {
    dispatch(removeAll());
  };
  return (
    <div>
      <button onClick={markAll}>Mark all done</button>
      <button onClick={clearAll}>Clear all</button>
    </div>
  );
};

export default Controls;
