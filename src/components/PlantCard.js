import React from "react";

function PlantCard({ plant, onDelete, onEdit }) {
  const { name, image, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => onEdit(plant)}>Edit</button>
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
