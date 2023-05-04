import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PokemonId = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getPecentage = (stat_base) => {
    const percentage = Math.floor((stat_base * 100) / 255);
    return `${percentage}%`;
  };

  return (
    <section className="flex justify-center items-center">
      <section className="bg-white rounded-lg shadow-lg p-4 grid w-[700px] relative ">
        {/* <Header /> */}
        <section className="p-4">
          <article>
            {/* Todo lo demas */}
            <section>
              <img
                className="w-32 mx-auto mb-4 hover:scale-150 hover:focus:scale-100 transition-all duration-300 ease-in-out"
                src={
                  pokemon?.sprites.versions["generation-v"]["black-white"][
                    "animated"
                  ].front_default
                }
                alt=""
              />

              {/* Informacion general */}
              <div className="">
                <h3 className="text-sm text-center font-bold opacity-60 mb-2 capitalize">
                  N° {pokemon?.id}
                </h3>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <hr />
                  <h2 className="capitalize text-center font-bold text-xl">
                    {" "}
                    {pokemon?.name}
                  </h2>
                  <hr />
                </div>
                <p></p>
              </div>

              <div className="flex justify-around mb-2 mt-2 items-center p-2 rounded-md ">
                <div className="text-black">
                  <h5 className="text-center mb-4 font-bold capitalize text-base ">
                    heigth
                  </h5>
                  <span className="pt-2 bg-black/5 pl-6 rounded-3xl pr-6 p-3">
                    {" "}
                    {pokemon?.height}m
                  </span>
                </div>

                <div className="text-black">
                  <h5 className="text-center mb-4 font-bold capitalize text-base ">
                    Weigth
                  </h5>
                  <span className="pt-2 bg-black/5 pl-6 rounded-3xl pr-6 p-3">
                    {" "}
                    {pokemon?.weight}kg
                  </span>
                </div>
              </div>

              <section className=" flex justify-around items-center">
                <section>
                  {/* Tipos de habilidades */}
                  <h3 className="text-center mt-2 mb-2 ">Abilityes</h3>

                  <section className="flex flex-wrap gap-4 text-center mb-4">
                    {pokemon?.abilities.map((ability) => (
                      <article className="w-full">
                        <span className="flex flex-col pt-2 bg-black/5 m-2 pl-6 rounded-3xl pr-6 p-3">
                          {" "}
                          {ability.ability.name}
                        </span>
                      </article>
                    ))}
                  </section>
                </section>
              </section>
            </section>

            {/* Seccion de stats */}
          </article>
          <section className="flex items-center my-6 sm:mx-auto sm:justify-center ">
            <section className="">
              {pokemon ? (
                <section className="text-center flex flex-wrap gap-4 justify-evenly items-center sm:grid sm:grid-cols-3 sm:grid-rows-4 sm:gap-4 sm:mb-[-12rem]">
                  {pokemon?.stats.map((stat) => (
                    <article key={stat.stat.name} className="stat.stat.name">
                      <section lassName="flex justify-between my-2">
                        <h5 className="text-2xl font-bold capitalize">
                          {stat.stat.name}
                        </h5>
                        <span>{stat.base_stat} /150 </span>
                      </section>
                      {/* Esta es la seccion de las barras las cuales son de color amarillo */}
                      <div className=" bg-gray-800/10 h-3 rounded-sm ">
                        <div
                          style={{ width: getPecentage(stat.base_stat) }}
                          className={`h-full w-[30%] bg-gradient-to-r from-yellow-400 to-yellow-600`}
                        ></div>
                      </div>
                    </article>
                  ))}
                </section>
              ) : (
                <div>Loading...</div>
              )}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PokemonId;
