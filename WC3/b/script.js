"use strict";

let baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=9cac5673&'

window.onload = function () {

    let url = baseUrl + 'i=tt6751668';
    getData(url).then(result => {
        console.log(result)
    });
};

