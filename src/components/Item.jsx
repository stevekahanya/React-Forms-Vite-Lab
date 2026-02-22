import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce", // Default as per requirements
    price: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { ...formData, id: Date.now() }; // Add a unique ID
    onItemFormSubmit(newItem); // Send to App
    setFormData({ name: "", category: "Produce", price: "" }); // Reset form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name} 
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      <select 
        name="category" 
        value={formData.category} 
        onChange={(e) => setFormData({...formData, category: e.target.value})}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default Item;