
	// find the sum of the squares of the first 9 natural numbers  that are divisible by 3.
	
	
const prompt = require("prompt-sync")();

let n = prompt()

for(let i = 1; i <= n; i++)
{
	if(i%3 == 0)
	{
		console.log(i)
	}
}
