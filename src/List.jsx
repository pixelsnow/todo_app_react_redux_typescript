import React from "react";

import { useSelector } from "react-redux";

import { selectTodoList, addItem } from "./features/counter/todoSlice";
import Item from "./Item";

import classes from "./List.module.css";

const List = () => {
  const list = useSelector((state) => state.todoList.list);
  return (
    <div>
      <h3>List will be here</h3>
      {list.map((item, index) => (
        <Item data={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default List;
