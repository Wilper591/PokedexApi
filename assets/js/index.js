import { getPokemons } from "./controllers/controllers.js";
const cardSection = document.querySelector("#card-section");
const inputPokemon = document.querySelector("#inputId");
const btnPokemon = document.querySelector("#btnBuscar");
btnPokemon.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarCard(inputPokemon.value);
});
const mostrarCard = async (id) => {
  const data = await getPokemons(id);
  const pokemons = data;

  let pokemonCards = "";
  pokemonCards += `<div>
            <p class="text-danger fs-1 text-capitalize"> ${pokemons.nombre}</p>
            <img class="image-fluid" src="${pokemons.img}">
            <p class="text-success text-capitalize">Tipo: ${pokemons.tipo} </p>
        </div>`;
  cardSection.innerHTML = pokemonCards;
};
