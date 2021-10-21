'use strict'

console.log('linked')

fetch("https://free-nba.p.rapidapi.com/teams", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "844fccd642msh67b258f17b1f872p142b41jsn54140229af72"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});