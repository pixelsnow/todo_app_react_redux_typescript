import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import {
  removeItem,
  toggleDone,
  editTask,
} from "../features/todo_list/todoSlice";

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
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItem(props.index));
  };

  const editItem = () => {
    setEditing(true);
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editTask({ index: props.index, task: e.target.value }));
  };

  const editDone = () => {
    setEditing(false);
  };

  const onToggleDone = () => dispatch(toggleDone(props.index));

  return (
    <div className={classes.item}>
      <div className={classes.checkbox_container}>
        <input
          onChange={onToggleDone}
          type="checkbox"
          name="done"
          id={"done" + props.index}
          checked={props.data.done}
        />
      </div>
      {editing ? (
        <form onSubmit={editDone}>
          <div className={classes.input_container}>
            <input type="text" value={props.data.task} onChange={handleEdit} />
          </div>
          <div className={classes.button_container}>
            <button type="submit">
              <span className="material-symbols-outlined">done</span>
            </button>
          </div>
        </form>
      ) : (
        <div className={classes.task_container}>
          <label htmlFor={"done" + props.index}>
            <p className={props.data.done ? classes.done : classes.not_done}>
              {props.data.task}
            </p>
          </label>
          <div className={classes.button_container}>
            <button onClick={editItem}>
              <span className="material-symbols-outlined">edit</span>
            </button>
          </div>
        </div>
      )}
      <div>
        <button onClick={deleteItem}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default Item;
