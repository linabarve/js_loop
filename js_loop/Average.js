

	// Average..............
	
const prompt = require("prompt-sync")();

let n = Number(prompt());
let s = 0
for(let i = 1; i <= n; i++)
{
	s = s + i
}

let a = s/n
console.log(a)

