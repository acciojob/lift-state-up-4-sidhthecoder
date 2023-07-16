import React from "react";

const Child = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button type="button" onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
