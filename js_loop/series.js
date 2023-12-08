
	// series where S = x - x^3 + x^5 + ... upto N terms...
	


const prompt = require('prompt-sync')();

let n = Number(prompt("Enter the value of N: "));
let x = Number(prompt("Enter the value of x: "));
let s = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        s = s - x ** i / i;
    } else {
        s = s + x ** i / i;
    }
}
console.log(s);



