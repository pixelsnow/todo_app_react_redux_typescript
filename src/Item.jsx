import React from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "./features/counter/todoSlice";

import classes from "./Item.module.css";

const Item = ({ data, index }) => {
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(removeItem(index));

  return (
    <div>
      <h4>List item</h4>
      <span className={data.done ? classes.done : classes.not_done}>
        {data.task}
      </span>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default Item;
