'use strict'

console.log('linked')

fetch("https://api-nba-v1.p.rapidapi.com/players/lastName/james", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "844fccd642msh67b258f17b1f872p142b41jsn54140229af72"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});