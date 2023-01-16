import GetMeal from './components/GetMeal/GetMeal'

import './App.css'

function App() {
  return (
    <div className="App">
      <main className="App__main">
        <h1 className="App__main--title">Feeling hungry?</h1>
        <h2 className="App__main--subtitle">Get a random meal recipe</h2>
        <GetMeal />
      </main>
      <footer className="App__footer">
        Made with <span role="img" aria-label="heart">💛</span> and <span role="img" aria-label="avocado">🥑</span> in Colombia |{" "}
        <a
          className="App__footer-link"
          href="https://github.com/Angelfire/feeling-hungry"
          title="Feeling Hungry"
        >
          Feeling Hungry?
        </a>
      </footer>
    </div>
  )
}

export default App
