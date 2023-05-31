import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character/");
      const data = await response.json();
      setCharacterList(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="character-list">
      {characterList.filter((character) => character.status === "Alive")
      .map((character) => {
          const { id, name, image, origin } = character;

          return (
            <div key={id} className="character-card">
              <img src={image} alt={name} className="character-image" />
              <h2 className="character-name">{name}</h2>
              <p className="character-origin">Origin: {origin.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
