

	// 
/*
const prompt = require('prompt-sync')();

let n = prompt("enter the number:");
let i = prompt("enter the number:");

while (i <= n){
	console.log(i)
	i = i + 1
}
*/	


const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number:"));
let i = parseInt(prompt("Enter the starting number:"));

while (i <= n) {
    console.log(i);
    i = i + 1; // or i += 1; or i++;
}

