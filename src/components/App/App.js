import React from "react";
import GetMeal from "../GetMeal/GetMeal";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <main className="App__main">
        <h1 className="App__title">Feeling hungry?</h1>
        <h2 className="App__subtitle">Get a random meal recipe</h2>
        <GetMeal />
      </main>
      <footer className="App__footer">
        Made with ❤️ in Colombia |{" "}
        <a
          className="App__footer-link"
          href="https://github.com/Angelfire/feeling-hungry"
          title="Feeling Hungry"
        >
          Feeling Hungry?
        </a>
      </footer>
    </div>
  );
};

export default App;
