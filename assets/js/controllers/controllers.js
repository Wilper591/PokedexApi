let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
/* let pokemonName = "charmander"; */
export const getPokemons = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/${id}`);
    let data = await response.json();
    const pokemon = {
      nombre: data.name,
      img: data.sprites.other.dream_world.front_default
    };
    return pokemon;
  } catch (error) {
    console.log(error);
  }
};
