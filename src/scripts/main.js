import { catalog } from "./catalog.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();
let seedsPlanted = plantSeeds(yearlyPlan);
let plantsHarvested = harvestPlants(seedsPlanted);
// let foodCatalog = catalog(plantsHarvested);
// renderToDOM(foodCatalog);

// scripts/main.js
// import { Catalog } from "./catalog.js";

let foods = [
  { name: "Corn" },
  { name: "Wheat" },
  { name: "Rice" },
  // Add more food objects as needed
];

catalog(plantsHarvested);
