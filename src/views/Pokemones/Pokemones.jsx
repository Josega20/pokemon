import React, { useEffect, useState } from "react";
import "./Pokemones.css";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemones(data.results);
  };

  const goToPokemonDetail = () => {
    if (pokemonSelected) {
      navigate(`/pokemones/${pokemonSelected}`);
    }
    else {alert("Por favor selecciona un Pokemon")}
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Selecciona un Pokémon</h1>
      <div>
        <select
          value={pokemonSelected}
          onChange={({ target }) => setPokemonSelected(target.value)}
        >
          <option value="" disabled>
            Pokemones
          </option>
          {pokemones.map(({ name }, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="button" onClick={goToPokemonDetail}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default Pokemones;
