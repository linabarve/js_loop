

       // solid square pattern........
       
       * * * * 
       * * * * 
       * * * *
       * * * *
        
const prompt = require('prompt-sync')();
let n = prompt("enter the number:");

for(i = 1; i <= n; i++){
 for (let j = 1; j <= n; j++) {
	process.stdout.write('* ')

}
console.log()
}



const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number:"));

for (let i = 1; i <= n; i++) {
    console.log('* '.repeat(n));
}

