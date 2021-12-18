import React, { useState } from "react";
import SearchPokemon from "../api/SearchPokemon/SearchPokemon";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SearchPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SearchPokemon />
    </>
  );
};

export default SearchPage;
