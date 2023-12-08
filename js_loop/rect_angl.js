

            //
/*            
const prompt = require('prompt-sync')();

let n = prompt("enter the number:");
let m = prompt("enter the number:");

while(m < n){
	console.log('* '.repeat(m));
        m += m;
}
*/


const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number:"));
let m = parseInt(prompt("Enter the starting number:"));

while (m <= n) {
    console.log('* '.repeat(m));
    m++; // Increment m by 1
}

