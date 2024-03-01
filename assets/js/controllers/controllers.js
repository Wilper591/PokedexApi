let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
export const getPokemons = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/${id}`);
    let data = await response.json();
    console.log(data.types[0].type.name)
    const pokemon = {
      nombre: data.name,
      img: data.sprites.other.dream_world.front_default,
      tipo: data.types.map(tipos => tipos.type.name),
    };
    return pokemon;
  } catch (error) {
    console.log(error);
  }
};
