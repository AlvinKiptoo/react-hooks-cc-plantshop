import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
      })
      .catch((error) => console.error("Error deleting plant:", error));
  };

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} />
      <PlantList plants={plants} setPlants={setPlants} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
