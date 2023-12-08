
	//  digit revers number.................	

const prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number: "));
let s = 0;

while (n > 0) {
    let r = n % 10;
    s = s * 10 + r;
    n = Math.floor(n / 10);
}

console.log(`Reversed number: ${s}`);

