/* 
Correctly update global variable from within block.

Adjust the code such that the logged value of x is 30
 */

let x = 10; //declaring a global variable and value
{
 /* change this line */  let x = 30; //to let this run, simply remove 'let' in the beginning 
}
console.log(x); // printing the value of x 
// expected output = 30