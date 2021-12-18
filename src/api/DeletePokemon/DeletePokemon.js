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
      <form className="deleteSearch" onSubmit={handleSubmit}>
        <input
          className="deleteSearchTextField"
          type="text"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Pokemon Id..."
        />
        <input
          type="submit"
          className="deleteSearchSubmitButton"
          value="Delete"
        />
      </form>
    </div>
  );
};

export default DeletePokemon;
