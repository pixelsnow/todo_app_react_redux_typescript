import React from "react";

import { useSelector } from "react-redux";

import {
  selectTodoList,
  addItem,
  removeItem,
} from "./features/counter/todoSlice";
import Item from "./Item";

const List = () => {
  const list = useSelector((state) => state.todoList.list);
  return (
    <div>
      <h3>List will be here</h3>
      {list.map((item, index) => (
        <Item data={item} key={index} />
      ))}
    </div>
  );
};

export default List;
