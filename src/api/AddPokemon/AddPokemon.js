import { useState } from "react";
import "./addpokemon.css";

const AddPokemon = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemon = { name, type, desc };

    fetch("http://localhost:5000/api/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(pokemon),
    }).then(console.log(name + " added"));
  };

  return (
    <div className="addPokemonWrapper">
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          className="pokemonsName"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="pokemonsType"
          type="text"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
        />
        <input
          className="pokemonsDesc"
          type="text"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        />
        <input type="submit" className="searchSubmitButton" />
      </form>
    </div>
  );
};

export default AddPokemon;
