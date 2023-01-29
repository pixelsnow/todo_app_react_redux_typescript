import React from "react";

const Item = ({ data }) => {
  return (
    <div>
      <h4>List item</h4>
      <p>{data}</p>
      <button>X</button>
    </div>
  );
};

export default Item;
