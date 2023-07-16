import React from "react";

const Child = ({ items, handleRemoveItem }) => {
  return (
    <div>
    <h2>Child Component</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} - ${item.price}
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Child;
