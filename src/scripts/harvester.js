export const harvestPlants = (seedsPlanted) => {
  const harvest = [];
  for (const plant of seedsPlanted) {
    let outputCount = plant.output;
    if (plant.type.toLowerCase() === "corn") {
      outputCount = Math.ceil(outputCount / 2);
    }
    for (let i = 0; i < outputCount; i++) {
      harvest.push(plant);
    }
  }
  return harvest;
};
