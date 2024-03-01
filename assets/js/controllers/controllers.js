let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
/* let pokemonName = "charmander"; */
export const getPokemons = async () => {
  try {
    let response = await fetch(`${URL_BASE}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

getPokemons();


