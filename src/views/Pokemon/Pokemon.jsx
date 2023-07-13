import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pcard from "../../Componentes/card";
const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setpokemon] = useState({});
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async () => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));
    setpokemon({ name, stats, src });
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return(
  <div>
    <Pcard pokemon={pokemon}></Pcard>
  </div>)
};

export default Pokemon;
