import { getPokemons } from "./controllers/pokemonData.js";
const cardSection = document.querySelector("#card-section");
const allCardsSection = document.querySelector("#allPokeCards");
const inputPokemon = document.querySelector("#inputId");
const btnPokemon = document.querySelector("#btnBuscar");
btnPokemon.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarCard(inputPokemon.value.toLowerCase());
});

/* Funcion para mostrar Card al buscar en el input */
const mostrarCard = async (id) => {
  const data = await getPokemons(id);
  const pokemons = data;
  let pokemonCards = "";
  let estadisticasPokemon = "";
  let PokeTipo = "";
  /* Iterador de tipos de pokemon */
  for (let i = 0; i < pokemons.tipo.length; i++) {
    PokeTipo += `<p id="tipoText" class="text-capitalize">${pokemons.tipo[i]}</p>`;
  }
  /* Iterador de estadisticas pokemon */
  for (let i = 0; i < pokemons.estadisticasName.length; i++) {
    estadisticasPokemon += `<p class="text-uppercase fs-4">
        ${pokemons.estadisticasName[i]}: ${pokemons.estadisticasValor[i]}
    </p>`;
  }
  pokemonCards += `
    <div id="inputCard" class="text-center">
    <p class="fs-2 text-capitalize border-bottom border-3"> ${pokemons.nombre}</p>
    <img id="imgInput" class="container m-1" src="${pokemons.img}">
    <div class="border-top border-3">
          <p id="pokeIDInput">N°: ${pokemons.id}</p>
          <h2 id="inputTipo" class="text-capitalize mb-1">tipo: ${PokeTipo}</h2 >
        </div>
    </div>
    <div id="statsCard">
      <p class="fs-1 border-bottom border-3">Estadísticas</p>
      ${estadisticasPokemon}
    </div`;
  cardSection.innerHTML = pokemonCards;
};

/* IIFE para insertar imagenes en section AllPokemons */
(async () => {
  const idPokemones = 48;
  let pokemonAllImg = "";
  /* Iterador de ID en base a idPokemones */
  for (let id = 1; id <= idPokemones; id++) {
    const data = await getPokemons(id);
    const pokemonsName = data.nombre;
    const pokemonsImg = data.img;
    const pokemonsTipo = data.tipo;
    const pokemonsID = data.id;
    let PokeTipos = "";
    /* Iterador de tipos de pokemon */
    for (let i = 0; i < pokemonsTipo.length; i++) {
      PokeTipos += `<p id="tipoAllText" class="text-capitalize">${pokemonsTipo[i]}</p>`;
    }
    pokemonAllImg += `
    <div id="pokeCard">
      <img id="imgAllCard" class="container m-2 p-2" src="${pokemonsImg}">
      <p class="text-capitalize border-bottom border-3">${pokemonsName}</p>
      <p id="pokeIdAll" class="">N°: ${pokemonsID}</p>
      <h2 id="tipoAll" class="text-capitalize">tipo: ${PokeTipos}</h2>
    </div>`;
    allCardsSection.innerHTML = pokemonAllImg;
  }
})();
