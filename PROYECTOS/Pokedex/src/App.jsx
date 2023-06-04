import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

const App = () => {
  // Declaración de los estados utilizando el hook useState
  const [pokemonName, setPokemonName] = useState(""); // Estado para almacenar el nombre del Pokémon ingresado por el usuario
  const [pokemonChosen, setPokemonChosen] = useState(false); // Estado para determinar si se ha seleccionado un Pokémon
  const [pokemon, setPokemon] = useState({ // Estado para almacenar los datos del Pokémon seleccionado
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });

  // Función para buscar el Pokémon utilizando la API de PokeAPI
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        // Actualiza el estado del Pokémon con los datos obtenidos de la respuesta de la API
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
        });
        // Marca el estado de pokemonChosen como true para indicar que se ha elegido un Pokémon
        setPokemonChosen(true);
      }
    );
  };
  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          value={pokemonName.toLowerCase()}
        />
        {/* El botón activa search pokemon  */}
        <button onClick={searchPokemon}>Search Pokémon</button>
      </div>
      <div className="DisplaySection">
        {/* Condicional para mostrar la información del Pokémon si se ha elegido uno */}
        {!pokemonChosen ? (
          <h1> Please choose a Pokémon </h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>Number: #{pokemon.number}</h3>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
          </>
        )}
      </div>
    </div>
  );
  


};

export default App;
