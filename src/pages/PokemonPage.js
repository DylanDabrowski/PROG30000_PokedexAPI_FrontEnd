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
      <FetchPokemon />
    </>
  );
};

export default PokemonPage;
