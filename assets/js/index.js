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
  console.log(data.estadisticasName);
  console.log(data.estadisticasValor);
  let pokemonCards = "";

  let estadisticasPokemon = "";
  /* Iterador de estadisticas pokemon */
  for (let i = 0; i < pokemons.estadisticasName.length; i++) {
    estadisticasPokemon += 
    `<p class="text-uppercase">${pokemons.estadisticasName[i]}: ${pokemons.estadisticasValor[i]}</p>`;
  }
  pokemonCards += 
    `<div id="inputCard" class="text-center m-3">
        <p class="fs-1 text-capitalize"> ${pokemons.nombre}</p>
          <img class="image-fluid mb-3" src="${pokemons.img}">
        <p class="fs-3 text-capitalize border-top border-3">Tipo: ${pokemons.tipo} </p>
    </div>
    <div id="statsCard">
      <p>Estadisticas</p>
      ${estadisticasPokemon}
    </div`;
  cardSection.innerHTML = pokemonCards;
};

/* IIFE para insertar imagenes */
(async () => {
  const idPokemones = 20;
  let pokemonAllImg = "";
  for (let id = 1; id <= idPokemones; id++) {
    const data = await getPokemons(id);
    const pokemonsName = data.nombre;
    const pokemonsImg = data.img;
    const pokemonsTipo = data.tipo;
    pokemonAllImg += `
    <div id="pokeCard" class="fs-2">
      <img id="imgCard" class="container m-2 p-2" src="${pokemonsImg}">
      <p id="nombrePoke" class="fw-bold text-capitalize border-bottom border-3">${pokemonsName}</p>
      <p class="text-capitalize">${pokemonsTipo} </p>
    </div>`;
    allCardsSection.innerHTML = pokemonAllImg;
  }
})();
