let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
export const getAllPokemons = async () => {
  try {
    let response = await fetch(`${URL_BASE}`);
    let data = await response.json();
    const allPokemons = {
      nombre: data.results.map((poke) => poke.name),
      url: data.results.map(poke => poke.url)
    };
/*     console.log(allPokemons); */
    return allPokemons;
  } catch (error) {
    console.log(error);
  }
};
getAllPokemons()