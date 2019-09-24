import React, { useState } from "react";
import GetRecipe from "../GetRecipe/GetRecipe";

import "./GetMeal.scss";

const GetMeal = () => {
  const [resources, setResources] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchResources = async api => {
    try {
      setIsLoading(true);
      const response = await fetch(api);
      const jsonData = await response.json();
      setResources(jsonData.meals[0]);
    } catch (e) {
      setIsError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetch = () => {
    fetchResources("https://www.themealdb.com/api/json/v1/1/random.php");
  };

  const emptyRecipe = Object.getOwnPropertyNames(resources).length !== 0;

  return (
    <div className="GetMeal">
      <button className="GetMeal__Button" onClick={() => handleFetch()}>
        {isLoading ? "Loading Recipe 🥑" : "Get Recipe 🥑"}
      </button>
      {emptyRecipe && <GetRecipe recipe={resources} />}
    </div>
  );
};

export default GetMeal;
