import { getPokemons } from "./controllers/controllers.js";
const cardSection = document.querySelector("#card-section");

const mostrarCard = async () => {
  const data = await getPokemons();
  const pokemons = data.results;
  const nextPageable = data.next;
  const PreviousPageable = data.previous;
  console.log(nextPageable)
  console.log(PreviousPageable);
  console.log(pokemons);
  // Hacer un innerHTML para el cardSection para insertar los card de cada pokemon
  let pokemonCards = "";
  pokemons.forEach(
    (pokemon) =>
      (pokemonCards += `
        <div>
            <p> ${pokemon.name}</p>
            <a href="${pokemon.url}">Link a detalles</a>
        </div>`)
  );

  cardSection.innerHTML = pokemonCards;
};
mostrarCard();
