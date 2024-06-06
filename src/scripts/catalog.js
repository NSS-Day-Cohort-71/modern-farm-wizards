export const catalog = (foods) => {
  // Create an object to store the quantity of each plant type
  const plantAmount = {};

  // Iterate through the harvested plants and count the quantity of each type
  foods.forEach((food) => {
    if (plantAmount[food.type]) {
      plantAmount[food.type]++;
    } else {
      plantAmount[food.type] = 1;
    }
  });

  // Generate HTML representation for each plant type and its quantity
  let foodHTML = "";
  for (let type in plantAmount) {
    foodHTML += `<section class="plant">${type} - Amount: ${plantAmount[type]}</section>`;
  }

  // Display the HTML representation in the container
  document.querySelector(".container").innerHTML = foodHTML;
};
