		
		
		1
		2 2
		3 3 3
		4 4 4 4
		5 5 5 5 5 
		



const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the value:"));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i + " ");
    }
    console.log();
}

