import React from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "../features/todo_list/todoSlice";

import classes from "./Item.module.css";

interface ItemData {
  task: string;
  done: boolean;
}

type ItemProps = {
  data: ItemData;
  index: number;
};

const Item = (props: ItemProps) => {
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(removeItem(props.index));

  return (
    <div>
      <h4>List item</h4>
      <span className={props.data.done ? classes.done : classes.not_done}>
        {props.data.task}
      </span>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default Item;
