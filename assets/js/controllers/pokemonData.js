let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
const resultado = document.querySelector("#resultado");

/* Funcion que limpia el mensaje de error */
const limpiarMsjError = () => {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
};

/* Consulta a la API */
export const getPokemons = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/${id}`);
    if (!response.ok) {
      throw new Error("Pokemon no encontrado");
    }
    let data = await response.json();
    let imgUrl = "";
    /* Validación para url de IMG en caso de encontrar valor null */
    if (data.sprites.other.dream_world.front_default !== null) {
      imgUrl = data.sprites.other.dream_world.front_default;
    } else if (data.sprites.other["official-artwork"].front_default !== null) {
      imgUrl = data.sprites.other["official-artwork"].front_default;
    } else if (data.sprites.other.home.front_default != null) {
      imgUrl = data.sprites.other.home.front_default;
    } else {
      imgUrl = "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg";
    }
    const pokemon = {
      id: data.id,
      nombre: data.name,
      img: imgUrl,
      tipo: data.types.map((tipos) => tipos.type.name),
      estadisticasName: data.stats.map((nombres) => nombres.stat.name),
      estadisticasValor: data.stats.map((valores) => valores.base_stat),
    };
    return pokemon;
  } catch (error) {
    resultado.innerHTML = `<p>Hubo un error al buscar el Pokémon: ${error.message}</p>`;
    setTimeout(() => {
      limpiarMsjError();
    }, 3000);
    return null;
  }
};
