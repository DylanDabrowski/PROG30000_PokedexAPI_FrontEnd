import React, { useState } from "react";
import AddPokemon from "../api/AddPokemon/AddPokemon";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AddPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AddPokemon />
    </>
  );
};

export default AddPage;
