import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PokemonDetail from "./PokemonDetail";

interface Pokemons {
  name: string;
  url: string;
  next: string;
}
interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const LIMIT:number = 20
const PokemonCollection: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('')
  const [currentPokemon, setCurrentPokemon] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async(pokeName: string) => {
    const curPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    setCurrentPokemon(curPoke.data)
    setShow(true)

  };

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=20`
      );
      setNextUrl(res.data.next)
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
      console.log(poke.data)

        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  const handleLoadmore = async ()=>{
    const res = await axios.get(nextUrl)
    setNextUrl(res.data.next)
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
  }

  return (
    <div className="pokemon-collection">
      {pokemons.map((pokemon) => {
        return (
          <div className="pokemon" key={pokemon.id} onClick={()=> handleShow(pokemon.name)}>
            <img
              src={pokemon.sprites.front_default}
              alt=""
              className="pokemon-img"
            />
            <div className="pokemon-name">{pokemon.name}</div>
          </div>
        );
      })}
      <div className="btn-loadmore" onClick={handleLoadmore}>
        <button>Load more</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          <PokemonDetail />
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default PokemonCollection;
