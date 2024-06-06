export const catalog = (foods) => {
  // Create an object to store the quantity of each plant type
  const plantQuantities = {};

  // Iterate through the harvested plants and count the quantity of each type
  foods.forEach(food => {
    if (plantQuantities[food.type]) {
      plantQuantities[food.type]++;
    } else {
      plantQuantities[food.type] = 1;
    }
  });

  // Generate HTML representation for each plant type and its quantity
  let foodHTML = "";
  for (let type in plantQuantities) {
    // Get the emoji for the plant type
    let emoji = "";
    switch (type.toLowerCase()) {
      case "corn":
        emoji = "🌽";
        break;
      case "asparagus":
        emoji = "🌱";
        break;
      case "potato":
        emoji = "🥔";
        break;
      case "soybean":
        emoji = "🌱";
        break;
      case "sunflower":
        emoji = "🌻";
        break;
      case "wheat":
        emoji = "🌾";
        break;
      default:
        emoji = "";
    }
    // Construct the HTML representation
    foodHTML += `<section class="plant">${emoji} ${type} - Quantity: ${plantQuantities[type]}</section>`;
  }

  // Display the HTML representation in the container
  document.querySelector(".container").innerHTML = foodHTML;
};
