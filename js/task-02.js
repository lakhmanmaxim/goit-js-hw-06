const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.style.listStyle = "none";

// const elements = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");

//   return itemEl;
// });
// console.log("elements", elements);

const addItemsToListIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");
    return itemEl;
  });
};

const elements = addItemsToListIngredients(ingredients);

ingredientsListEl.append(...elements);
