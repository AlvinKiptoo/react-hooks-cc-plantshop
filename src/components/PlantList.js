import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, onDelete }) {
  
  const handleUpdate = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdate={handleUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default PlantList;
