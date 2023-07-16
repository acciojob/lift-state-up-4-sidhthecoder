import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemPriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleAddToCart = () => {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: itemPrice
      };

      setCartItems([...cartItems, newItem]);
      setItemName("");
      setItemPrice("");
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <form>
        <label htmlFor="text">Item Name:</label>
        <input type="text" value={itemName} onChange={handleItemNameChange} />
        <label htmlFor="number">Item Price:</label>
        <input type="number" value={itemPrice} onChange={handleItemPriceChange} />
        <button type="button" onClick={handleAddToCart}>Add to Cart</button>
      </form>
      <Child cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default Parent;
