let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
export const getPokemons = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/${id}`);
    let data = await response.json();
    let imgUrl = "";
    /* Validación para url de IMG en caso de encontrar valor null */
    if (data.sprites.other.dream_world.front_default !== null) {
      imgUrl = data.sprites.other.dream_world.front_default;
    } else if (data.sprites.other["official-artwork"].front_default !== null) {
      imgUrl = data.sprites.other["official-artwork"].front_default;
    } else {
      imgUrl = data.sprites.other.home.front_default;
    }
/*   console.log(data.stats[0].stat.name, data.stats[0].base_stat); */
    const pokemon = {
      nombre: data.name,
      img: imgUrl,
      tipo: data.types.map(tipos => tipos.type.name),
      estadisticasName: data.stats.map(nombres => nombres.stat.name),
      estadisticasValor: data.stats.map(valores => valores.base_stat)
    };
    return pokemon;
  } catch (error) {
    console.log(error);
  }
};
getPokemons(1)