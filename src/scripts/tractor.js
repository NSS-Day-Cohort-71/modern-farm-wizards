//plan is an array of 3 array. iterate through all 3 arrays and invoke seed functions for each object

import { addPlant, usePlants } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

//then add it to the array of plants in the field module
export const plantSeeds = (plan) => {
  for (const row of plan) {
    for (const seed of row) {
      if (seed === "Asparagus") {
        let asparagus = createAsparagus();
        addPlant(asparagus);
      } else if (seed === "Corn") {
        let corn = createCorn();
        addPlant(corn);
      } else if (seed === "Potato") {
        let potato = createPotato();
        addPlant(potato);
      } else if (seed === "Soybean") {
        let soybean = createSoybean();
        addPlant(soybean);
      } else if (seed === "Sunflower") {
        let sunflower = createSunflower();
        addPlant(sunflower);
      } else if (seed === "Wheat") {
        let wheat = createWheat();
        addPlant(wheat);
      } else {
        console.log("no seed found");
      }
    }
  }
  let plantsThatAreInTheField = usePlants();
  return plantsThatAreInTheField;
};
