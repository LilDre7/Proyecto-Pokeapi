import React from "react";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { setNameTrainer } from "../Store/slices/nameTrainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNameTrainer(e.target.nameTrainer.value));
    navigate("/pokedex");
  };

  return (
    <section className=" min-h-screen grid grid-rows-[1fr_auto]">
      <article className="flex justify-center flex-wrap items-center flex-col gap-5">
        <div>
          <img className="w-[300px]" src="./images/xxxxx.png" alt="" />
        </div>
        <h2 className="text-center"> ¡Bienvenidos a la Pokedex, entrenadores Pokemon!<br />Registrate para ver tu pokedex</h2>
        <p className="sm:max-w-[800px] text-center m-4  " >
          ¡Bienvenidos a la Pokedex, entrenadores Pokemon! Estamos emocionados
          de presentarles nuestra herramienta indispensable para cualquier
          aventurero en el mundo Pokemon: la Pokedex. Con esta aplicación,
          tendrán acceso a información detallada sobre todas las especies de
          Pokemon conocidas hasta la fecha, desde los clásicos de la región de
          Kanto hasta los más recientes de Galar y más allá.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-[300px] flex justify-between items-center border-2 border-b
        lack rounded-lg text-center"
        >
          <input
            className="w-full h-full border-4 border-black"
            type="text"
            placeholder="Escribe tu nombre aquí"
            id="nameTrainer"
          />
          <button className="bg-black text-white p-3">Registrate</button>
        </form>
      </article>
      <Footer />
    </section>
  );
};

export default Home;
