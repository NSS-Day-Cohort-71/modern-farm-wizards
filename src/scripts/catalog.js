export const catalog = (foods) => {
  let foodHTML = "";
  for (let food of foods) {
    foodHTML += `<section class="plant">${food.type}</section>`;
  }
  document.querySelector(".container").innerHTML = foodHTML;
};
