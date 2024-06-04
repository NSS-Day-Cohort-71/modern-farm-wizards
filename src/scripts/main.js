import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();
let seedsPlanted = plantSeeds(yearlyPlan);
console.log(seedsPlanted);
