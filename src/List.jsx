import React from "react";

import { useSelector } from "react-redux";

import Item from "./Item";
import Input from "./Input";
import Controls from "./Controls";

import classes from "./List.module.css";

const List = () => {
  const list = useSelector((state) => state.todoList.list);
  return (
    <div>
      <h3>List will be here</h3>
      <Input />
      <Controls />
      {list.map((item, index) => (
        <Item data={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default List;
