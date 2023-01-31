import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/todo_list/todoSlice";

const EditItem = () => {
  const dispatch = useDispatch();

  /* const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editTask({ index: props.index, task: e.target.value }));
  }; */
  return {
    /* <form>
      <input type="text" value={props.data.task} onChange={handleEdit} />
      <button onClick={}>Done</button>
    </form> */
  };
};

export default EditItem;
