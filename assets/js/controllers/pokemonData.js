let URL_BASE = "https://pokeapi.co/api/v2/pokemon";
export const getPokemons = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/${id}`);
    let data = await response.json();
    let imgUrl = "";
    
    if (data.sprites.other.dream_world.front_default !== null) {
      imgUrl = data.sprites.other.dream_world.front_default;
    } else if (data.sprites.other["official-artwork"].front_default !== null) {
      imgUrl = data.sprites.other["official-artwork"].front_default;
    } else {
      imgUrl = data.sprites.other.home.front_default;
    }


    const pokemon = {
      nombre: data.name,
      img: imgUrl,
      tipo: data.types.map(tipos => tipos.type.name),
    };
/*     console.log(pokemon); */
    return pokemon;
  } catch (error) {
    console.log(error);
  }
};