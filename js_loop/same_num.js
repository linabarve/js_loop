

		// 
		
const prompt = require('prompt-sync')();

let n = Number(prompt("Enter the number:"))
let j = 0
let s = 0

for(let i = 1; i <= n; i++)
{
	j = (j * 10) + 1
	console.log(j)
	s = s + j
}
console.log(s)

