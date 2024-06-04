// export const catalog = (harvest) => {
//   let catalogHTML = "";
//   for (const food of harvest) {
//     catalogHTML += `<section class="plant">${food.type}</section>;`;
//   }
//   return catalogHTML;
// };

// export const catalog = (harvest) => {
//   const container = document.querySelector(".container");
//   container.innerHTML = "";
//   for (let i = 0; i < harvest.length; i++) {
//     const section = document.createElement("section");
//     section.classList.add("plant");
//     section.textContent = harvest[i].type;
//     container.appendChild(section);
//   }

// };

// export const catalog = (harvest) => {
//   let catalogHTML = "";

//   for (let i = 0; i < harvest.length; i++) {
//     catalogHTML += `<section class="plant">${harvest[i].type}</section>`;
//   }

//   return catalogHTML;
// };

// export const renderToDOM = (catalogHTML) => {
//   const foodList = document.getElementsByClassName("messages");

//   if (foodList) {
//     foodList.innerHTML = catalogHTML;
//   } else {
//     console.error('Could not find element with id "messages');
//   }
// };

// scripts/catalog.js
export const catalog = (foods) => {
  let foodHTML = "";
  for (let food of foods) {
    foodHTML += `<section class="plant">${food.type}</section>`;
  }
  document.querySelector(".container").innerHTML = foodHTML;
};
