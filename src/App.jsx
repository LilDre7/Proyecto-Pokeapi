import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedAuto from "./components/auth/ProtectedAuto";
import PokemonId from "./pages/PokemonId";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedAuto />}>
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Pokedex/:id" element={<PokemonId />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
