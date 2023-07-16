import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [items, setItems] = useState([]);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemPriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: itemPrice
      };

      setItems([...items, newItem]);
      setItemName("");
      setItemPrice("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <form>
        <label htmlFor="text">Item Name:</label>
        <input type="text" value={itemName} onChange={handleItemNameChange} />
        <label htmlFor="number">Item Price:</label>
        <input type="number" value={itemPrice} onChange={handleItemPriceChange} />
        <input type="button" value="Add Item" onClick={handleAddItem} />
      </form>
      <Child items={items} handleRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default Parent;
