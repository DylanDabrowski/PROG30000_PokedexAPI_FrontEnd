import React, { useState } from "react";
import DeletePokemon from "../api/DeletePokemon/DeletePokemon";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DeletePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <DeletePokemon />
    </>
  );
};

export default DeletePage;
