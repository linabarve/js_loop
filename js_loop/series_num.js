
	// Write a program to find the sum of following series......

	// S = 1 + 4 – 9 + 16 – 25 + 36 – … … n terms........


const prompt = require('prompt-sync')();

let n = prompt()
let s = 0

for(let i = 1; i <= n; i++)
{
	if(i%2==0)
	{
		s = s - i ** 2
	}
	else
	{
		s = s + i ** 2
	}
}
console.log(s)



	// find the sum of following series 1 + 8 + 27 ……n
	
const prompt = require('prompt-sync')();

let n = Number(prompt())

let s = 0

for(let i = 1; i <= n; i++)
{
	s = i**3
}
console.log(s)



	// X+X2/2+X3/3+X4/4  ....upto n terms
	
const prompt = require('prompt-sync')();

let n = prompt()
let x = 1
let s = 0

for(let i = 1; i <= n; i++)
{
	s = s + x ** 2/x
	x = x+1
}
console.log(s)


		// X-X3/3+X5/5-X7/7+X9/9 ....upto n terms..............
*/		
const  prompt = require('prompt-sync')();

let n = prompt()
let x = 1
let s = 0

for(let i = 1; i <= n; i++)
{
	if(i%2==0)
	{
		s = s - x ** x/x
		x = x + 2
	}
	else
	{
		s = s + x ** x/x
		x = x + 2
	}
}
console.log(s)

















