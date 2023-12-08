

	// Plindrome number...................
	
const prompt = require('prompt-sync')();

let n = Number(prompt())
let p = 0
let k = n

while(n > 0)
{
	let r = n%10
	p = (p*10)+r
	n = Math.floor(n / 10)
}
if (p == k)
{
	console.log("it is plindrome number:",p)
}
else
{
	console.log("it is not plindrome number:",p)
}

