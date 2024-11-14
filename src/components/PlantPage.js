import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
      })
      .catch((error) => console.error("Error deleting plant:", error));
  };

  const handleUpdate = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} onUpdate={handleUpdate} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
