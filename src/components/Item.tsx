import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  toggleDone,
  editTask,
} from "../features/todo_list/todoSlice";
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
  const [editValue, setEditValue] = useState("");
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(selectTodos);

  const deleteItem = () => dispatch(removeItem(props.index));

  const editItem = () => {
    setEditing(true);
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editTask({ index: props.index, task: e.target.value }));
  };

  const editDone = () => {
    setEditing(false);
  };

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

      {editing ? (
        <>
          <input type="text" value={props.data.task} onChange={handleEdit} />
          <button onClick={editDone}>Done</button>
        </>
      ) : (
        <label htmlFor={"done" + props.index}>
          <span className={props.data.done ? classes.done : classes.not_done}>
            {props.data.task}
          </span>
        </label>
      )}

      {editing ? <></> : <button onClick={editItem}>Edit</button>}

      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default Item;
