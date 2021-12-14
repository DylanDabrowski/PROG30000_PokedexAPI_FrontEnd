import React, { useState } from "react";
import FetchPokemon from "../api/FetchPokemon/FetchPokemon";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const PokemonPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1>Pokemon Page</h1>
      <FetchPokemon />
    </>
  );
};

export default PokemonPage;
