export const harvestPlants = (seedsPlanted) => {
  let harvest = [];
  for (const plant of seedsPlanted) {
    if (plant.type === "corn") {
      for (let i = 0; i <= plant.output; i++) {
        harvest.push(plant);
      }
    } else {
      for (let i = 0; i <= plant.output; i++) {
        harvest.push(plant);
      }
    }
  }
  return harvest;
};
