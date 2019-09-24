import React from "react";

import "./GetRecipe.scss";

const GetRecipe = ({ recipe }) => {
  const createIngredients = meal => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      }
    }

    return ingredients;
  };

  const ingredients = createIngredients(recipe);
  const mapIngredients = ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient}</li>;
  });

  return (
    <div className="GetRecipe">
      <figure className="GetRecipe__image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <figcaption className="GetRecipe__caption">
          <h2 className="GetRecipe__title">{recipe.strMeal}</h2>
          <p className="GetRecipe__area">{recipe.strArea}</p>
          <p className="GetRecipe__category">{recipe.strCategory}</p>
        </figcaption>
      </figure>
      <div className="GetRecipe__recipe">
        <p className="GetRecipe__instructions">{recipe.strInstructions}</p>
        <h3 className="GetRecipe__subtitle">Ingredients</h3>
        <ul className="GetRecipe__ingredients">{mapIngredients}</ul>
      </div>
    </div>
  );
};

export default GetRecipe;
