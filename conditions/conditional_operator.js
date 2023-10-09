/* The conditional(ternary) operator can be used to replace simple if...else statements. 
The syntax is => condition ? if true : else. 
"If the condition is met, the code after (?) is executed. if not met, the code after the (:) is executed"

In this example we use the conditional (ternary) operator to assign a value to the variable text depending on the value of num.
Adjust the code such that the value of text will be 'num is greater than 3'
*/

/* change this line */ const num = 3; //if you change the number to anything greater than 3 the first string will run
const text = num > 3 ? 'num id greater than 3' : 'num is smaller than or equal 3';
console.log(text); 


//testing the operator with something I thought of
let gum = 2
let string = gum > 2 ? 'gum is greater' : 'gum is not greater' // this says " if gum is greater than 2 the value for this new variable will be the first string, if not it'll be the 2nd string "
console.log(string)// (gum is not greater) 