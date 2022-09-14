const { default: axios } = require("axios");
class PokemonList{
  constructor(Pokemonarray){
    this.Pokemonarray=Pokemonarray;
  }
  AddPokemon(must){
    this.Pokemonarray.push(must);
  }
}
class Ability{
  constructor(name,url,is_hidden,slot){
    this.name=name;
    this.url=url;
    this.is_hidden=is_hidden
    this.slot=slot;
    this.effectentries=[];
  }
  getDetails(){
    axios.get(this.url)
    .then(res=>{
      res.data.effect_entries.forEach((p)=>{
        this.effectentries.push(p)
      })
    })
  }
}
class Pokemon{
  baseexperience;
  constructor(name,url){
    this.name=name;
    this.url=url;
    this.abilities=[]
  }
  getDetails(){
    axios.get(this.url)
    .then(res=>{
      this.baseexperience=res.data.base_experience;
      this.form=res.data.forms;
      res.data.abilities.forEach((p) => {
        this.abilities.push(new Ability(p.ability.name,p.ability.url,p.is_hidden,p.slot))
      });
    })
  }
}
let pokemonlist;
function getPokemonList(url){
  pokemonlist= new PokemonList([]);
  axios.get(url)
  .then(res=>{
    console.log(res.data);
    res.data.results.forEach((p)=>{
      const pokemon= new Pokemon(p.name,p.url);
      pokemonlist.AddPokemon(pokemon);
      pokemon.getDetails();
    });
    console.log(pokemonlist);
  })
}
getPokemonList("https://pokeapi.co/api/v2/pokemon?limit=5");

setTimeout(() => {
  console.log(pokemonlist);
}, 30000);