"use strict";

window.onload = (event) => {
    console.log('page is fully loaded');
};

const inputForm = document.getElementById("form");
inputForm.addEventListener('submit', Functie);


function Functie() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let order = document.getElementById("order").value;

    let htmlString = `
    <p>The order for the customer ${name} is the following: ${order}.<br>
    The customer may be notified by email: ${email}</p>
`;
    document.getElementById('output').innerHTML = htmlString;
}