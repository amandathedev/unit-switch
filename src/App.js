import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <select class="value-dropdown" name="units">
        <option value="temperature">Temperature</option>
        <option value="weight">Weight</option>
        <option value="distance">Distance</option>
      </select>
      <form>
        <span>Fahrenheit</span>
        <input class="input-box" type="text" />
        <button type="button">
          Convert <i class="fas fa-arrow-down"></i>
        </button>
        <hr />
        <span>Celcius</span>
        <input class="input-box" type="text" />
        <button type="button">
          Convert <i class="fas fa-arrow-up"></i>
        </button>
      </form>
    </div>
  );
}

export default App;
