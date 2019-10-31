import React from "react";
import Form from "./components/Temperature";
import "./App.css";
import CategorySelector from "./components/CategorySelector";

function App() {
  return (
    <div className="App">
      <CategorySelector />
    </div>
  );
}

export default App;
