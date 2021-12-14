import React from "react";
import "./style.css";

function populateList(items) {
  items.forEach((item) => addItem(item));
}

function addItem(item) {
  const li = document.createElement("li");
  li.className = "pokemonCard";

  const name = document.createElement("h1");
  name.className = "pokemonName";
  name.innerHTML = item.name;

  const type = document.createElement("h3");
  type.className = "pokemonType";
  type.innerHTML = item.type;

  const desc = document.createElement("p");
  desc.className = "pokemonDesc";
  desc.innerHTML = item.description;

  li.appendChild(name);
  li.appendChild(type);
  li.appendChild(desc);

  document.getElementById("pokemonCards").appendChild(li);
}

export default class FetchPokemon extends React.Component {
  state = {
    loading: true,
    pokemons: null,
  };

  async componentDidMount() {
    fetch("http://localhost:5000/api/pokemon", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => populateList(data));
  }

  render() {
    return (
      <div>
        <ul id="pokemonCards"></ul>
      </div>
    );
  }
}
