'use strict'

console.log('linked')

fetch("")
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});