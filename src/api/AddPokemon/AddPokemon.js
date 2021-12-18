import { useState } from "react";
import "./addpokemon.css";

const AddPokemon = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const pokemon = { name, type, description };

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
      <div className="formWrapper">
        <form className="addForm" onSubmit={handleSubmit}>
          <h1 className="addPokeHeader">Name:</h1>
          <input
            className="addPokeField"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
            placeholder="enter a name..."
          />
          <h1 className="addPokeHeader">Type:</h1>
          <input
            className="addPokeField"
            type="text"
            required
            value={type}
            onChange={(e) => setType(e.target.value.toLowerCase())}
            placeholder="enter a pokemon type..."
          />
          <h1 className="addPokeHeader">Description:</h1>
          <input
            className="addPokeField"
            type="text"
            required
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="enter a description..."
          />
          <div className="submitWrapper">
            <input type="submit" className="addPokeSubmit" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPokemon;
