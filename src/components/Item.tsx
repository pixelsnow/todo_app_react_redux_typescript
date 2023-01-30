import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeItem, toggleDone } from "../features/todo_list/todoSlice";
import { selectTodos } from "../app/store";

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
  /* const [checked, setChecked] = useState("") */
  const dispatch = useDispatch();
  const list = useSelector(selectTodos);

  const deleteItem = () => dispatch(removeItem(props.index));

  // Index seems undefined here?
  const onToggleDone = () => dispatch(toggleDone(props.index));

  return (
    <div>
      <h4>List item</h4>
      <input
        onChange={onToggleDone}
        type="checkbox"
        name="done"
        id={"done" + props.index}
        checked={props.data.done}
      />
      <label htmlFor={"done" + props.index}>
        <span className={props.data.done ? classes.done : classes.not_done}>
          {props.data.task}
        </span>
      </label>

      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default Item;