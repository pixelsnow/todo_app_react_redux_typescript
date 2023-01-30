import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../features/todo_list/todoSlice";

const Input = () => {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.length) dispatch(addItem(newItem));
    setNewItem("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={newItem} />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Input;