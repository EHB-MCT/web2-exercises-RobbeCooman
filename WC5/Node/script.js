import * as fs from 'fs/promises';


let result = await fs.readFile('boardgames.json');
let boardgames = JSON.parse(result);


for(let property in boardgames){

}