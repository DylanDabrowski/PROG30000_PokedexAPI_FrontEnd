import { useState } from "react";
import "./deletepokemon.css";

const DeletePokemon = () => {
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/pokemon/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(console.log(id + " deleted"));
  };

  return (
    <div className="deletePokemonWrapper">
      <form className="pokeSearch" onSubmit={handleSubmit}>
        <input
          className="searchTextField"
          type="text"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Search Pokemon Id..."
        />
        <input type="submit" className="searchSubmitButton" />
      </form>
    </div>
  );
};

export default DeletePokemon;
