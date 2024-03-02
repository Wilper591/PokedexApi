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

/* Funcion para mostrar Card al buscar en el input */
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

/* IIFE para insertar imagenes */
(async () => {
  const idPokemones = 10;
  let pokemonAllImg = "";
  for (let id = 1; id <= idPokemones; id++) {
    const data = await getPokemons(id);
    const pokemons = data.img;
    pokemonAllImg += `
    <img class="image-fluid border border-2 border-black m-2 p-2" src="${pokemons}">
    <div id="nombrePoke">
    </div>`;
    allCardsSection.innerHTML = pokemonAllImg;
  }
})();

/* Funcion para insertar los nombres de todos los pokemon */
(async () => {
  const data = await getAllPokemons();
  const pokemones = data.nombre;
  console.log(pokemones);
  let pokemonAllCards = "";
  for (let i = 0; i < pokemones.length; i++) {
    pokemonAllCards += `
        <p id="pokeCard" class="text-capitalize">${pokemones[i]}</p>
  `;
  }
  const pokeName = document.querySelector("#nombrePoke");
  pokeName.innerHTML = pokemonAllCards;
})();
/* (async () => {
  const idPokemones = 10;
  let pokemonAllImg = "";
  for (let id = 1; id <= idPokemones; id++) {
    const data = await getPokemons(id);
    const pokemons = data.img;
    // Itera sobre cada imagen y agrega la etiqueta img correspondiente
    for (let i = 0; i < pokemons.length; i++) {
      pokemonAllImg += `<img class="image-fluid border border-2 border-black m-2 p-2" src="${pokemons[i]}">`;
    }
  }
  // Agrega las imágenes al elemento allCardsSection
  allCardsSection.innerHTML = pokemonAllImg;

  // Ahora, añade los nombres de los pokemons
  const dataNames = await getAllPokemons();
  const pokemones = dataNames.nombre;
  let pokemonAllCards = "";
  for (let i = 0; i < pokemones.length; i++) {
    pokemonAllCards += `<p class="text-capitalize">${pokemones[i]}</p>`;
  }
  // Agrega los nombres al elemento con id "nombrePoke"
  const pokeName = document.querySelector("#nombrePoke");
  pokeName.innerHTML = pokemonAllCards;
})(); */
