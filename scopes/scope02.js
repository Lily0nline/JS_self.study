// Adjust the code so that result is the sum of x and the block version of y.


const x = 10; //declaring a global variable with a value
const y = 2;
let result = 0;
{
   const y = 15; //declaring a local variable inside a block scope | block scope : a code written inside {}
/*change this and the line below*/}
result = x + y; //This is located outside of the block chain, so it is saying add the values of the global variables of x, y.
console.log(result); //To get 25 you should move result = x + y inside the block chain so it will say "add the global variable of x and the local var of y"
// expected output = 25