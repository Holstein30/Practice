// Create a function batches that returns the maximum number of whole batches that can be cooked from a recipe.
/*
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is number representing how many units there are.

`batches(recipe, available)`
*/

let batches = (recipe, available) => {
  const recipeArray = Object.keys(recipe);
  const availableArray = Object.keys(available);

  console.log(recipeArray);
  console.log(availableArray);
};

batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
);
