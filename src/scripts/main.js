import { catalog } from "./catalog.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();
let seedsPlanted = plantSeeds(yearlyPlan);
let plantsHarvested = harvestPlants(seedsPlanted);

let foods = [{ name: "Corn" }, { name: "Wheat" }, { name: "Rice" }];

catalog(plantsHarvested);
