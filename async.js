const { default: axios } = require("axios");


async function getPokemonDetail(name, abilityName) {
  try {
    let res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
    if (res.status === 200) {
      res.data.results.forEach((element) => {
        if (element.name === name) {
          pokemonDetail = element;
        }
      });
    }
    let pokemonDetailRes;
    if (pokemonDetail) {
      pokemonDetailRes = await axios.get(pokemonDetail.url);
    }

    let abilityObj;
    pokemonDetailRes.data.abilities.forEach((element) => {
      if (element.ability.name === abilityName) {
        abilityObj = element.ability;
      }
    });
    let abilityRes;
    if (abilityObj) {
      abilityRes = await axios.get(abilityObj.url);
    }
    console.log(abilityRes.data);
  } catch (err) {
    console.log(err);
  }
}

getPokemonDetail('pikachu', 'static');
