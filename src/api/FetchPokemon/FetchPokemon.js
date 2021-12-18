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
    type.style.backgroundColor = "#fd4b5a";
  } else if (item.type === "water") {
    type.style.backgroundColor = "#5280e6";
  } else if (item.type === "bug") {
    type.style.backgroundColor = "#3c9950";
  } else if (item.type === "flying") {
    type.style.backgroundColor = "#94b2c7";
  } else if (item.type === "normal") {
    type.style.backgroundColor = "#ca98a6";
  } else if (item.type === "electric") {
    type.style.backgroundColor = "#e2e32b";
    type.style.color = "#0f0f0f";
  } else if (item.type === "ground") {
    type.style.backgroundColor = "#6e491f";
  } else if (item.type === "fairy") {
    type.style.backgroundColor = "#eda5f0";
  } else if (item.type === "grass") {
    type.style.backgroundColor = "#27cb50";
  } else if (item.type === "fighting") {
    type.style.backgroundColor = "#ef6239";
  } else if (item.type === "psychic") {
    type.style.backgroundColor = "#f71d92";
  } else if (item.type === "steel") {
    type.style.backgroundColor = "#43bd94";
  } else if (item.type === "dark") {
    type.style.backgroundColor = "#343448";
  } else if (item.type === "dragon") {
    type.style.backgroundColor = "#448a95";
  } else if (item.type === "ghost") {
    type.style.backgroundColor = "#906791";
  } else if (item.type === "ice") {
    type.style.backgroundColor = "#86d2f5";
  } else {
    type.style.backgroundColor = "#f2f2f2";
    type.style.color = "#050505";
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
          <div id="pokemonCards" className="pokemonCards"></div>
        </div>

        <div className="popup"></div>
      </div>
    );
  }
}
