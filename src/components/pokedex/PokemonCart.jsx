import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import PokemonId from "../../pages/PokemonId";
import "./customCart.css";

const borderByType = {
  grass: "border-[#BAD6AA]",
  fire: "border-[#FD7D24]",
  water: "border-[#4592C4]",
  bug: "border-[#729F3F]",
  normal: "border-[#A4ACAF]",
  poison: "border-[#B97FC9]",
  electric: "border-[#EED535]",
  ground: "border-[#AB9842]",
  fairy: "border-[#FDB9E9]",
  fighting: "border-[#D56723]",
  psychic: "border-[#F366B9]",
  rock: "border-[#A38C21]",
  ghost: "border-[#7B62A3]",
  ice: "border-[#51C4E7]",
  dragon: "border-[#F16E57]",
  dark: "border-[#707070]",
  steel: "border-[#9EB7B8]",
  flying: "border-[#3DC7EF]",
};

const backgroundByType = {
  grass: "from-[#82C1C9] to-[#BAD6AA]",
  fire: "from-[#F96D6F] to-[#E8AE1B]",
  water: "from-[#133258] to-[#1479FB]",
  bug: "from-[#729F3F] to-[#A8B820]",
  normal: "from-[#A4ACAF] to-[#C3C3C1]",
  poison: "from-[#B97FC9] to-[#A040A0]",
  electric: "from-[#EED535] to-[#F7D038]",
  ground: "from-[#654008] to-[#D69638]",
  fairy: "from-[#FDB9E9] to-[#EE99AC]",
  fighting: "from-[#D56723] to-[#EB4971]",
  psychic: "from-[#F366B9] to-[#FBA8C9]",
  rock: "from-[#A38C21] to-[#B6A136]",
  ghost: "from-[#323569] to-[#787DDA]",
  ice: "from-[#6FBEDF] to-[#BDEBFE]",
  dragon: "from-[#F16E57] to-[#FCB6A7]",
  dark: "from-[#030706] to-[#5A5E5D]",
  steel: "from-[#9EB7B8] to-[#D1D1E0]",
  flying: "from-[#3DC7EF] to-[#BDB9B8]",
};

const PokemonCart = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState();
  // *** Este es el modal con Boostrap *** //
  const [isModalOpen, setIsModalOpen] = useState(false);

  const types = pokemon?.types
    .slice(0, 2)
    .map((type) => type.type.name)
    .join(" / ");

  // Este useEffect ES PARA RENDERIZAR EL POKEMON CUANDO SEA NECESARIO
  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  // función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ************************* //
  return (
    <div
      className={`carta__padre relative w-full flex justify-center items-center bg-white shadow-sm shadow-black/20 rounded-xl pt-14 mb-8 border-2 sm:bg-black/5 sm:max-w-[250px] sm:min-w-[250px] sm:h-[180px] hover:scale-105 hover:focus:scale-105 transition-all duration-300 ease-in-out max-w-[1200px] `}
    >
      <button className="" onClick={openModal}>
        <div>
          <img
            className="absolute top-0 left-15 w-24 -translate-y-12 sm:w-28 img hover:scale-125 hover:focus:scale-125 transition-all duration-300 ease-in-out"
            src={pokemon?.sprites.front_default}
            alt=""
          />
        </div>
        <div className="mb-6">
          <p className="font-semibold opacity-70 text-[13px] ">
            N° {pokemon?.id}
          </p>
          <h2 className="text-xl font-semibold capitalize">{pokemon?.name}</h2>
          <div className="">
            <h3
              className={`capitalize mt-2 text-[14px] border-2 bg-black/5 font-semibold p-[3px] rounded-lg ${
                borderByType[pokemon?.types[0].type.name]
              }
            ${backgroundByType[pokemon?.types[0].type.name]}`}
            >
              {types}
            </h3>
            {/* <h3>Stats:</h3>
            <ul>
              {pokemon?.stats.map((stat) => (
                <li>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Pokemon Details"
        animationType="slide"
      >
        <div className="relative">
          <PokemonId pokemonUrl={pokemonUrl} pokemon={pokemon} />
          <button
            className=" absolute top-5 right-5 bg-red-600 p-2 rounded-lg"
            onClick={closeModal}
          >
            <i className="bx bx-x text-white text-2xl "></i>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PokemonCart;
