/*
In this exercise you will learn how to abort a running loop even though its condition is still satisfied.
You can use the break statement to achieve this.
 You can place the break statment anywhere inside the code-block of a loop. 
 As soon as break is evaluated, the loop is terminated. 
 Usually, you would place break behind an if condition. 
 Then, the loop will only abort if a certain condition met.
In the example below, we iterate through the elements of the array mixed. 
In each iteration, we append the current element of mixed to the new array newArray. 

But, in this exercise we want to abort the loop if the current element is not of type number.
Complete the if statement below and execute break if the current element is not of type number.
*/


const mixed = [10,4,'c',6,'a',4]; //new array declared
const newArray = []; // empty array declared

for (let i = 0; i < mixed.length; i++) { //stating i has the value of 0, if i is less than the length of mixed, increment by 1
   const current = mixed[i]; // new variable has the value of mixed array index
   /*change this line */if (typeof current !== 'number') break; //if the type of the variable current is not a number break the loop
   newArray.push(current); // push the value of current to the array 'newArray'
}

console.log(newArray); //checking the output 
// exptected output = [10,4]
