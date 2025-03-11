// App.js
import React from "react";
import AnimalCard from "./components/AnimalCard";
import animals from "./components/animalData";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <br></br>
      <h1>Animals</h1>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <AnimalCard key={index} {...animal} />
        ))}
      </div>
    </div>
  );
};

export default App;
