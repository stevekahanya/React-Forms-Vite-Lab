import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // Requirements: Use a string ID or unique ID
    const newItem = { 
      ...formData, 
      id: crypto.randomUUID(), 
      isInStock: true 
    }; 
    
    onItemFormSubmit(newItem); 
    setFormData({ name: "", category: "Produce" }); 
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      {/* Test requires Label text "Name" to find the input */}
      <label>
        Name:
        <input 
          type="text"
          name="name" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={formData.category} 
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;