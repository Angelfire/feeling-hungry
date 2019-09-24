import React from "react";
import GetMeal from "../GetMeal/GetMeal";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Feeling hungry?</h1>
      <h2 className="App__subtitle">Get a random meal recipe</h2>
      <GetMeal />
    </div>
  );
};

export default App;
