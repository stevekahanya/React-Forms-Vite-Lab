import React from "react";
import Item from "./Item"; // Ensure the path and name are correct

function ShoppingList({ items }) {
  return (
    <ul className="Items">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ShoppingList;