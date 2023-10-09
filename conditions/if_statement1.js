/*
The code will assign the variable 'num' a new value 1. But it will only run if the condition is met.
Adjust the condition such that the code inside the curly braces will execute and the console.log() statement logs 'true'
*/
//change if (1 > 2){ this line only
let num = 0; //declaring a new variable and giving it a value 
if (1 > 2){ //stating the condition "if 1 is greater than 2"
    num = 1; //declaring a new value for the variable num
}
console.log(num === 1); //(false) | the new value of num is 1 and one is not greater than two therefore it is false

if (1 < 2){ //can either make it 1 < 2 or 1 > 0 
    num = 1; 
}
console.log(num === 1); //true

