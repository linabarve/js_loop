

	//  largest smallest..............

const prompt = require('prompt-sync')();

let n = Number(prompt("Enter the number of values: "));

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
    let a = Number(prompt("Enter value:-"));

    if (a > max) {
        max = a;
    }

    if (a < min) {
        min = a;
    }
}

console.log("Maximum value:", max);
console.log("Minimum value:", min);










