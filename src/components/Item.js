import React from "react";

const Item = ({ item, handleDeleteItem, handleToggle }) => {
  return (
    <li>
      <input
        onClick={() => handleToggle(item.id)}
        type="checkbox"
        value={item.packed}
      />
      <span>{item.quantity}</span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
