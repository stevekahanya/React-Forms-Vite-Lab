import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // This is the logic the Filter tests are checking for:
  const itemsToDisplay = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter 
        search={search} 
        onSearchChange={setSearch} 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {/* Ensure you pass itemsToDisplay, NOT items */}
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;