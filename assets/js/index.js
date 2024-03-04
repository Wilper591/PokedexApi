import { getPokemons } from "./controllers/pokemonData.js";
import { getAllPokemons } from "./controllers/pokemonAllData.js";
const cardSection = document.querySelector("#card-section");
const allCardsSection = document.querySelector("#allPokeCards");
const inputPokemon = document.querySelector("#inputId");
const btnPokemon = document.querySelector("#btnBuscar");
btnPokemon.addEventListener("click", (e) => {
  e.preventDefault(); 
  mostrarCard((inputPokemon.value).toLowerCase());
});

/* Funcion para mostrar Card al buscar en el input */
const mostrarCard = async (id) => {
  const data = await getPokemons(id);
  const pokemons = data;
  let pokemonCards = "";
  let estadisticasPokemon = "";
  let PokeTipo = "";
  /* Iterador de estadisticas pokemon */
  for (let i = 0; i < pokemons.estadisticasName.length; i++) {
    estadisticasPokemon += 
    `<p class="text-uppercase">
        ${pokemons.estadisticasName[i]}: ${pokemons.estadisticasValor[i]}
    </p>`;
  }
  for (let i = 0; i < pokemons.tipo.length; i++) {
    PokeTipo += `${pokemons.tipo[i]} `;
  }
  pokemonCards += `
    <div id="inputCard" class="text-center">
          <p class="fs-3 text-capitalize border-bottom border-3"> ${pokemons.nombre}</p>
            <img id="imgInput" class="container m-1" src="${pokemons.img}">
          <div id="contenedorTipo" class="border-top border-3">
          <p id="pokeIDInput">N°: ${pokemons.id}</p>
          <p id="inputTipo" class="text-capitalize">Tipo: ${PokeTipo} </p>
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
  for (let id = 1; id <= idPokemones; id++) {
    const data = await getPokemons(id);
    const pokemonsName = data.nombre;
    const pokemonsImg = data.img;
    const pokemonsTipo = data.tipo;
    const pokemonsID = data.id;
    let PokeTipo = "";
    for (let i = 0; i < pokemonsTipo.length; i++) {
      PokeTipo += `${pokemonsTipo[i]} `;
    }
    pokemonAllImg += `
    <div id="pokeCard" class="fs-2">
      <img id="imgCard" class="container m-2 p-2" src="${pokemonsImg}">
      <p id="nombrePoke" class="fw-bold text-capitalize border-bottom border-3">${pokemonsName}</p>
      <div>
        <p id="pokeIDAll" class="">N°: ${pokemonsID}</p>
        <p id="idTipoText" class="text-capitalize">Tipo: ${PokeTipo}</p>
      </div>
    </div>`;
    allCardsSection.innerHTML = pokemonAllImg;
  }
})();
