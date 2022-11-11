import React, { useEffect } from "react";
import { PokemonDetail } from "./PokemonCollection";

interface Props {
  currentPokemon: PokemonDetail;
}
const PokemonDetails: React.FC<Props> = (props) => {
  const { currentPokemon } = props;
  useEffect(() => {
    if (currentPokemon.stats) {
      console.log(currentPokemon.stats);
    }
  }, []);
  // console.log(currentPokemon.abilities?.map(ab => ab.name));
  return (
    <div className="pokemon-detail">
      <div className="pokemon-name">{currentPokemon.name}</div>
      <img
        src={currentPokemon.sprites.front_default}
        alt=""
        className="pokemon-img"
      />
      <div className="details">
        <div className="detail abilities">
          Abilities: 
          {currentPokemon.abilities &&
            currentPokemon.abilities.map((ab, i) => {
              return(
                <span key={i}>{ab.ability.name}</span>
              )
            })}
        </div>
        {currentPokemon.stats &&
          currentPokemon.stats.map((s, i) => {
          return(
            <div className={"detail " + s.stat.name}>
              <span className="detail-name">{s.stat.name} : </span>
              <span className="detail-number">{s.base_stat}</span>
              <div className="detail-gauge"></div>
            </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default PokemonDetails;
