import React, { useState } from "react";

function PlantCard({ plant, onUpdate, onDelete }) {
  const { id, name, image, price, inStock } = plant;
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(price);


  const handlePriceUpdate = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdate(updatedPlant);
        setIsEditing(false); 
      });
  };

  
  const toggleStockStatus = () => {
    const updatedStockStatus = { inStock: !inStock };

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStockStatus),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdate(updatedPlant); 
      });
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>

      
      {isEditing ? (
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      ) : (
        <p>Price: ${price}</p>
      )}

      {isEditing ? (
        <button onClick={handlePriceUpdate}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit Price</button>
      )}

      
      <button
        className={inStock ? "primary" : ""}
        onClick={toggleStockStatus}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>

      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
