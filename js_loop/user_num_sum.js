

	// user number sum............
	
const prompt = require('prompt-sync')();

let n = Number(prompt("Enter the number:"));
let s = 0;

for(let i = 1; i <= n; i++){
	let k = Number(prompt("enter the user num:"));
	s = s + k;
}
console.log(s)
