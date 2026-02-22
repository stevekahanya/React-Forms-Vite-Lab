import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([]); // Initial items array
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handler for adding a new item (Step 3)
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Filter logic: This runs every time state changes (Dynamic Search)
  const itemsToDisplay = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}