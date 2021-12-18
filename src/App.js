import react from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import AddPage from "./pages/AddPage";
import DeletePage from "./pages/DeletePage";
import Home from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonpage" element={<PokemonPage />} />
        <Route path="/addpage" element={<AddPage />} />
        <Route path="/deletepage" element={<DeletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
