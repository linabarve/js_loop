
	// factorial..........
	
const prompt = require("prompt-sync")();

let n = prompt()
let f = 1

for(let i=n; i > 0; i--)
{
	f = f * i
}
console.log(f)
