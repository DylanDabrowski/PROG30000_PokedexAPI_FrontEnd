import react from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import Home from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonpage" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
