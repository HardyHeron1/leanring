const { default: axios } = require("axios");

function getPokemonDetail(name, abilityName){
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
  .then(res => {
    let pokemonDetail;
    if (res.status === 200) {
      res.data.results?.forEach(element => {
        if(element.name === name) {
          pokemonDetail = element;
        }
      });
    }
    if(pokemonDetail) {
      return axios.get(pokemonDetail.url);
    }
  }).then(res => {
    let abilityObj;
    res.data.abilities.forEach(element => {
      if (element.ability.name === abilityName) {
        abilityObj = element.ability;
      }
    });
    if (abilityObj) {
      return axios.get(abilityObj.url);
    }
  }).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  });
}

getPokemonDetail('pikachu', 'static');