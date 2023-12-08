
	// Armstrong number............

const prompt = require('prompt-sync')();
let n = prompt()
let s = 0
let l = n

while (n > 0)
{
	let r = n % 10
	s = s + r ** 3
	n = Math.floor(n / 10)
}

if(l==s)
{
	console.log("Is is Aarmstrong number:",l)
}
else
{
	console.log("Is is not Armstrong Number:",l)
}


