
	// cube...........
	
const prompt = require("prompt-sync")();

let n = prompt()

for(let i = 0; i <= n; i++)
{
	console.log(i**3)
}

	
	
	// cube sum.............
	
const prompt = require("prompt-sync")();

let n = prompt()
let s = 0

for(let i = 0; i <= n; i++)
{
	let c = i**3
	s = s + c
}
console.log(s)
