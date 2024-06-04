let plantsInField = [];

export const addPlant = (seed) => {
  // need to check if seed in an array (Array.isArray), if it is, iterate and add all items
  if (Array.isArray(seed)) {
    for (const corn of seed) {
      plantsInField.push(corn);
    }
  } else {
    plantsInField.push(seed);
  }
};

export const usePlants = () => {
  return plantsInField.slice();
};
