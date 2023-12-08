	
		// perfect number.....


const prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number: "));
let s = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        s += i;
    }
}

if (n === s) {
    console.log("is a perfect number:");
} else {
    console.log(" is not a perfect number:");
}

