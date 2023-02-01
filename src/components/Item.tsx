import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  toggleDone,
  editTask,
} from "../features/todo_list/todoSlice";
import { selectTodos } from "../app/store";
import EditItem from "./EditItem";

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
    <div>
      <input
        onChange={onToggleDone}
        type="checkbox"
        name="done"
        id={"done" + props.index}
        checked={props.data.done}
      />
      {editing ? (
        <>
          <form onSubmit={editDone}>
            <input type="text" value={props.data.task} onChange={handleEdit} />
            <button type="submit">
              <span className="material-symbols-outlined">done</span>
            </button>
          </form>
        </>
      ) : (
        <>
          <label htmlFor={"done" + props.index}>
            <span className={props.data.done ? classes.done : classes.not_done}>
              {props.data.task}
            </span>
          </label>
          <button onClick={editItem}>
            <span className="material-symbols-outlined">edit</span>
          </button>
        </>
      )}
      <button onClick={deleteItem}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default Item;
