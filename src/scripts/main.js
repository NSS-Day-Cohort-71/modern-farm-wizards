import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();
let seedsPlanted = plantSeeds(yearlyPlan);
let plantsHarvested = harvestPlants(seedsPlanted);
console.log(plantsHarvested);
