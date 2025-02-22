import { useState } from "react";
import "./pokemonstyle.css";

const typeColor: any = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState({
    health: "",
    imgSrc: "",
    pokeName: "",
    statAttack: "",
    statDefense: "",
    statSpeed: "",
    types: [],
    themeColor: "",
  });

  const generateCard = (pokemonResponse: any) => {
    setPokemonData({
      health: pokemonResponse.stats[0].base_stat,
      imgSrc: pokemonResponse.sprites.other.dream_world.front_default,
      pokeName:
        pokemonResponse.name[0].toUpperCase() + pokemonResponse.name.slice(1),
      statAttack: pokemonResponse.stats[1].base_stat,
      statDefense: pokemonResponse.stats[2].base_stat,
      statSpeed: pokemonResponse.stats[5].base_stat,
      types: pokemonResponse.types,
      themeColor: typeColor[pokemonResponse.types[0].type.name],
    });
  };

  const getPokeData = async () => {
    let id = Math.floor(Math.random() * 150) + 1;
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((pokemonResponse) => pokemonResponse.json())
      .then((pokemonResponse) => generateCard(pokemonResponse));
  };

  return (
    <div>
      <div className="card-container">
        {pokemonData.imgSrc ? (
          <div
            id="card"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${pokemonData.themeColor} 36%, #ffffff 36%)`,
            }}
          >
            <p className="hp">
              <span>HP</span>
              {pokemonData.health}
            </p>
            <img src={pokemonData.imgSrc} alt="pokemon-image" />
            <h2 className="poke-name">{pokemonData.pokeName}</h2>
            <div className="types">
              {pokemonData.types.map((item: any) => (
                <span style={{ backgroundColor: pokemonData.themeColor }}>
                  {item.type.name}
                </span>
              ))}
            </div>
            <div className="stats">
              <div>
                <h3>{pokemonData.statAttack}</h3>
                <p>Attack</p>
              </div>
              <div>
                <h3>{pokemonData.statDefense}</h3>
                <p>Defense</p>
              </div>
              <div>
                <h3>{pokemonData.statSpeed}</h3>
                <p>Speed</p>
              </div>
            </div>
          </div>
        ) : (
          <>Loading</>
        )}
        <button id="btn" onClick={getPokeData}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
