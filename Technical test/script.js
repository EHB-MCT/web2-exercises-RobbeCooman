'use strict'

console.log('linked')

fetch('')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));