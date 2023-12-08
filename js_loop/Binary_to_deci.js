
  	// Binary to Decimal.................
  	

const prompt = require('prompt-sync')();

let n = Number(prompt("Enter a binary number: "));
let s = 0;
let i = 0;

while (n > 0) {
    let r = n % 10;
    s = s + r * (2 ** i);
    i++;
    n = Math.floor(n / 10);
}

console.log("Decimal equivalent:", s);

