export const harvestPlants = (seedsPlanted) => {
  const harvest = [];
  let id = 0;
  for (const plant of seedsPlanted) {
    let outputCount = plant.output;
    if (plant.type.toLowerCase() === "corn") {
      outputCount = Math.ceil(outputCount / 2);
    }
    for (let i = 0; i < outputCount; i++) {
      const harvestedPlant = { ...plant, id: id++ };
      harvest.push(harvestedPlant);
    }
  }
  return harvest;
};
