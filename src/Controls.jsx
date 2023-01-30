import React from "react";
import { useDispatch } from "react-redux";

import { removeAll } from "./features/counter/todoSlice";

const Controls = () => {
  const dispatch = useDispatch();

  const markAllDone = () => {};
  const clearAll = () => {
    dispatch(removeAll());
  };
  return (
    <div>
      <button onClick={markAllDone}>Mark all done</button>
      <button onClick={clearAll}>Clear all</button>
    </div>
  );
};

export default Controls;
