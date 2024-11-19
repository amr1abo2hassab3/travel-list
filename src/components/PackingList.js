import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  handleDeleteItem,
  handleToggle,
  handleDeleteAllItem,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  } else if (sortBy === "description") {
    sortedItems = items
      .slice() // sort
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  }
  return (
    <div className="list">
      <ul className="">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order </option>
          <option value="description">Sort by Description </option>
          <option value="packed">Sort by packed status </option>
          <option value="quantity">Sort by quantity </option>
        </select>
        <button onClick={handleDeleteAllItem}>clear List </button>
      </div>
    </div>
  );
};

export default PackingList;
