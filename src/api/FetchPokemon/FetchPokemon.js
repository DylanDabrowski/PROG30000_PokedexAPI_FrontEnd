import React from "react";

function populateList(items) {
  items.forEach((item) => addItem(item));
}

function addItem(item) {
  const span = document.createElement("span");
  span.setAttribute("data-id", item.id);
  const li = document.createElement("li");
  li.innerHTML = item.name;

  li.setAttribute("data-id", item.id);
  li.appendChild(span);
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
