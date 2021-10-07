"use strict";
let pokemons = [];

console.log('page loaded!');


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

console.log(pokemons);

function bluidList() {

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