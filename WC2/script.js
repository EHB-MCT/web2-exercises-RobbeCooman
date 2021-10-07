"use strict";

import team from './team.js'

let pokemons = [];

console.log('page loaded!');


function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
        //get individual pokemon
        data.results.forEach(poke => {
            fetch(poke.url)
                .then(response => response.json())
                .then(data2 => {
                    pokemons.push(data2);
                })
        });
    });
}

window.onload = function(){
    fetchPokemon();
    window.setTimeout(buildList, 3000)
}



function buildList() {
    pokemon.sort((a, b) => a.id - b.id);
    let html = '';

    html += `
  
        <img class="pokemonImg" src="${element.sprites.front_default}" alt="${element.name}">
        <p class="pokemonNr">${element.id}</p>
        <p class="pokemonName">${element.name}</p>
        <div class="pokemonTypes">
            ${typeDiv}  
        </div>
    `

    document.getElementById("Pokemon").innerHTML += html;
}

