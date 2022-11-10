import React from "react";
import { PokemonDetail } from "./PokemonCollection";

interface Props {
  currentPokemon: PokemonDetail;

}
const PokemonDetails: React.FC<Props> = (props) => {
  const { currentPokemon } = props;
  console.log(currentPokemon.abilities?.map(ab => ab.name)); 
  return (
    <div>
      <div className="pokemon-name">{currentPokemon.name}</div>
      <img
        src={currentPokemon.sprites.front_default}
        alt=""
        className="pokemon-img"
      />
      <div className="details">
        <div className="detail">
          {
            // currentPokemon.abilities.map(ab => ab.ability)
          }
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
