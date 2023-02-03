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
  const [editedItem, setEditedItem] = useState("");
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItem(props.index));
  };

  const editItem = () => {
    setEditing(true);
    setEditedItem(props.data.task);
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedItem(e.target.value);
  };

  const editDone = () => {
    dispatch(editTask({ index: props.index, task: editedItem }));
    setEditing(false);
  };

  const cancelEdit = () => {
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
        <>
          <form onSubmit={editDone}>
            <input type="text" value={editedItem} onChange={handleEdit} />
            <div className={classes.done_button_container}>
              <button className={classes.button_done} type="submit">
                <span className="material-symbols-outlined">done</span>
              </button>
            </div>
          </form>
          <div className={classes.close_button_container}>
            <button type="button" onClick={cancelEdit}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={classes.task_container}>
            <label htmlFor={"done" + props.index}>
              <p className={props.data.done ? classes.done : classes.not_done}>
                {props.data.task}
              </p>
            </label>
            <div className={classes.edit_button_container}>
              <button type="button" onClick={editItem}>
                <span className="material-symbols-outlined">edit</span>
              </button>
            </div>
          </div>
          <div className={classes.close_button_container}>
            <button type="button" onClick={deleteItem}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
