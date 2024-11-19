import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  // this function add new item in the state
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  // this function delete item in the state
  function handleDeleteItem(id) {
    const alertCheck = window.confirm(
      `Are You sure You want to delete this item that has this  ${id}`
    );

    alertCheck && setItems(items.filter((item) => item.id !== id));
  }
  // this function update item in the state
  function handleToggle(id) {
    // create a new variable ,to  change the value of the array and store it in this variable
    const updateItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updateItems);
  }
  // this function delete all data in the state
  function handleDeleteAllItem() {
    let alertCheck = window.confirm("Are you sure you want to delete all items ?");

    alertCheck && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggle={handleToggle}
        handleDeleteAllItem={handleDeleteAllItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
