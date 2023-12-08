

		// Greatest............


const prompt = require('prompt-sync')();

let n = prompt("Enter the value of n: ");
let max = 0;

for (let i = 1; i <= n; i++) {
    let k = Number(prompt());

    if (k > max) {
        max = k;
    }
}

console.log("The greatest number is: ",max);

