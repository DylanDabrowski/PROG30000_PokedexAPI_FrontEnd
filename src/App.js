// import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import AddPage from "./pages/AddPage";
import DeletePage from "./pages/DeletePage";
import Home from "./pages";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonpage" element={<PokemonPage />} />
        <Route path="/addpage" element={<AddPage />} />
        <Route path="/deletepage" element={<DeletePage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
