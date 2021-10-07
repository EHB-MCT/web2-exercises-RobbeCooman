"use strict";
let pokemons = [];

console.log('page loaded!');


fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
      data.results.forEach(poke => {
          fetch(poke.url)
          .then(response2 => response2.json())
          .then(data2 => {
              pokemons.push(data2);
          })
      });
  });

  console.log(pokemons);

