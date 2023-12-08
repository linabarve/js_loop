

	// Prime number............
	
const prompt = require('prompt-sync')();

 
let n = prompt("Enter the number:");
let c = 0;

for (let i = 1; i <= n; i++)
{
    if (n % i == 0)
    {
        c++;
    }
}

if (c == 2) {
    console.log("It is a prime number:", n);
} else {
    console.log("It is not a prime number:", n);
}

