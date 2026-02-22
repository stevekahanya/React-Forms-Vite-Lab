import React from "react";

function Item({ item }) {
  return (
    <li className={item.isInStock ? "" : "out-of-stock"}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      {/* If the test looks for "Out of Stock" text, keep this: */}
      {!item.isInStock && <span className="out-of-stock-text">Out of Stock</span>}
    </li>
  );
}

export default Item;