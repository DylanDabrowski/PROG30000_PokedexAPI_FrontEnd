import { useState } from "react";
import "./searchpokemon.css";

function populateList(items) {
  items.forEach((item) => addItem(item));
}

function addItem(item) {
  const card = document.createElement("a");
  card.className = "card";
  card.onclick = console.log("hello");

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const name = document.createElement("h2");
  name.className = "card-title";
  name.innerHTML = item.name;

  const type = document.createElement("h3");
  type.className = "card-tag";
  type.innerHTML = item.type;

  const desc = document.createElement("p");
  desc.className = "card-body";
  desc.innerHTML = item.description;

  cardContent.appendChild(name);
  cardContent.appendChild(type);
  cardContent.appendChild(desc);

  card.appendChild(cardContent);

  document.getElementById("pokemonCards").appendChild(card);
}

const SearchPokemon = () => {
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/pokemon/bytype/" + type, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => populateList(data));
  };

  return (
    <div className="searchPokemonWrapper">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="searchTextField"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Search by Type..."
        />
        <input type="submit" className="searchSubmitButton" value="Search" />
      </form>
      <div id="pokemonCards" className="pokemonCards"></div>
    </div>
  );
};

export default SearchPokemon;
