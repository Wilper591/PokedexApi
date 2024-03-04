let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
let limit_NEXT = 30;
let limit_PREV = 0;

export const getAllPokemons = async () => {
  try {
    let response = await fetch(
      `${URL_BASE}/?offset=${limit_PREV}&limit=${limit_NEXT}`
    );
    let data = await response.json();
    const allPokemons = {
      nombre: data.results.map((poke) => poke.name),
      url: data.results.map((poke) => poke.url),
    };
    console.log(allPokemons.url);
    return allPokemons;
  } catch (error) {
    console.log(error);
  }
};
/* getAllPokemons(); */
