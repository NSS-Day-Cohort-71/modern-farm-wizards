import { catalog } from "./catalog.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();
let seedsPlanted = plantSeeds(yearlyPlan);
let plantsHarvested = harvestPlants(seedsPlanted);

// let alphabetical = plantsHarvested.sort()
// catalog(alphabetical);

plantsHarvested.sort((a, b) => {
  if (a.type < b.type) {
    return -1;
  }
  if (a.type > b.type) {
    return 1;
  }
  return 0;
});
console.log("Sorted Plants Harvested:", plantsHarvested);

// Display the sorted harvested plants in the catalog
catalog(plantsHarvested);
