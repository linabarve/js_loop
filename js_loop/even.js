

	// even number..............
	
const prompt = require("prompt-sync")();

let n = prompt("Enter the number:");

for(let i = 1; i <= n; i++){
	if(i%2 == 0){
		console.log(i)
	}
}
