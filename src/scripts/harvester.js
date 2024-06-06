export const harvestPlants = (seedsPlanted) => {
  const harvest = [];
  for (const plant of seedsPlanted) {
    let plantCount = plant.output;
    if (plant.type.toLowerCase() === "corn") {
      plantCount = plantCount / 2;
    }
    for (let i = 0; i < plantCount; i++) {
      harvest.push(plant);
    }
  }
  return harvest;
};
