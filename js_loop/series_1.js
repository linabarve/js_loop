
//41. Write a program to find the sum of following series:

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
console.log(s)
