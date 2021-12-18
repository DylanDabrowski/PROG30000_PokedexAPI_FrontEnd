import React from "react";
import "./fetchpokemon.css";

function populateList(items) {
  items.forEach((item) => addItem(item));
}

function addItem(item) {
  const card = document.createElement("a");
  card.className = "card";
  // card.onclick = console.log("hello");

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const image = document.createElement("img");
  image.className = "card-image";
  image.src = item.imageUrl;

  const name = document.createElement("h2");
  name.className = "card-title";
  name.innerHTML = item.name;

  const type = document.createElement("h3");
  type.className = "card-tag";
  type.innerHTML = item.type;

  if (item.type === "poison") {
    type.style.backgroundColor = "#9b69da";
  } else if (item.type === "fire") {
    type.style.backgroundColor = "#9b69da";
  } else {
    type.style.backgroundColor = "#f2f2f2";
    type.style.color = "#808080";
  }

  const desc = document.createElement("p");
  desc.className = "card-body";
  desc.innerHTML = item.description;

  cardContent.appendChild(image);
  cardContent.appendChild(name);
  cardContent.appendChild(type);
  cardContent.appendChild(desc);

  card.appendChild(cardContent);

  document.getElementById("pokemonCards").appendChild(card);
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
      <div className="poke">
        <div className="pokeWrapper">
          <h2 className="title">Pokemon</h2>
          <div id="pokemonCards" className="pokemonCards"></div>
        </div>
      </div>
    );
  }
}
