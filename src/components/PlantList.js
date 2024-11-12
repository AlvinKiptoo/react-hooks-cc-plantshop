import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete, onEdit }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default PlantList;
