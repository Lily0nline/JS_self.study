/*
You can chain multiple expressions using logical operators. We can use this to test multiple conditions in 1 if-statement.
The code below is missing 1 expression after the logical AND (&&) operator inside the if-condition. 
Adjust the code such that the value of result will be true. 
*/

const numOne = 5; //declaring a variable with a value
const numTwo = 6; 
let result; // declaring a new variable with no value
/* change the if condiiton and add more inside the {} */ 
if (numOne >= 5 /* &&  */ ){ //stating the condition "if numOne is greater than or equal to 5 and __" | will run true since I turned the && into a comment.
    result = true; //then the new value for result will be true
}

console.log(result===true); //(SyntaxError: Unexpected token ')' | the current condition is not fully stated since there's an empty space after the operator &&


if (numOne >= 5 && numTwo === 6 ){ //whatever sign you give doesnt matter
    result = true; // the value of result will change into true
}

console.log(result===true); //(true) | since the new value of result is equal to true

if (numOne >= 5 && numTwo === 6 ){ 
    result = 4; 
}

console.log(result===true); //(false) | 4 is not equal to 'true' 