import React from "react";
import { useSelector } from "react-redux";

import Item from "./Item";
import Input from "./Input";
import Controls from "./Controls";
import { selectTodos } from "../app/store";

import classes from "./List.module.css";

const List = () => {
  const list = useSelector(selectTodos);
  return (
    <div className={classes.list_wrapper}>
      <div className={classes.list_container}>
        <h3>To-do list</h3>
        <Input />
        {list.map((item, index) => (
          <Item data={item} index={index} key={index} />
        ))}
        <Controls />
      </div>
    </div>
  );
};

export default List;
