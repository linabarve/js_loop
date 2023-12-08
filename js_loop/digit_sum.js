

	// sum of digit............

const prompt = require('prompt-sync');

let n = prompt();
let s = 0;

for (let i = n; i > 0; i = Math.floor(i / 10)) {
    let r = i % 10;
    s = s + r;
}

console.log("Sum of the digits:", s);

