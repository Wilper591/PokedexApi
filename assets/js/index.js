import { getPokemons } from "./controllers/pokemonData.js";
import { getAllPokemons } from "./controllers/pokemonAllData.js";
const cardSection = document.querySelector("#card-section");
const allCardsSection = document.querySelector("#allCard-section");
const inputPokemon = document.querySelector("#inputId");
const btnPokemon = document.querySelector("#btnBuscar");
btnPokemon.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarCard(inputPokemon.value);
});

const mostrarCard = async (id) => {
  const data = await getPokemons(id);
  const pokemons = data;
  /*   console.log(data); */
  let pokemonCards = "";
  pokemonCards += `<div class="text-center">
            <p class="text-danger fs-1 text-capitalize"> ${pokemons.nombre}</p>
              <img class="image-fluid border border-2 border-black" src="${pokemons.img}">
            <p class="text-success text-capitalize">Tipo: ${pokemons.tipo} </p>
        </div>`;
  cardSection.innerHTML = pokemonCards;
};

(async () => {
  const data = await getAllPokemons();
  const pokemones = data.nombre;
  /*   console.log(pokemones); */
  let pokemonAllCards = "";
  for (let i = 0; i < pokemones.length; i++) {
    pokemonAllCards += `
        <p id="pokeCard" class="row col-3 border border-2 fw-bold fs-1 text-justify text-capitalize">${pokemones[i]}</p>
  `;
  }
  allCardsSection.innerHTML = pokemonAllCards;
})();

(async () => {
  const idPokemones = 10;
  let pokemonAllImg = "";
  for (let id = 1; id <= idPokemones; id++) {
    const data = await getPokemons(id);
    console.log(data.img);
    const pokemons = data.img;

      pokemonAllImg += `<img class="image-fluid border border-2 border-black" src="${pokemons}">`;

    allCardsSection.innerHTML = pokemonAllImg;
  }
})();
