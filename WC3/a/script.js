"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber)

const inputForm = document.getElementById("form");
inputForm.addEventListener('submit', Functie);


function Functie() {
    event.preventDefault();


    let htmlString = ``;
    document.getElementById('output').innerHTML = htmlString;
}