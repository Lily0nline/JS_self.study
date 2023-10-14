/*
With the array.push() method we can add an element to an array. 
It can be applied to an existing array to append new values to the end of the array.
In the example below, we apply the array.push() method to extend the array numbers with the number 3.

To solve this task, append another number to the end of the array. 
Use the correct number such that the console.log() statement to log true.
*/


const numbers = [1, 2, 3, 4]; //declare an array
numbers.push(3); //added 3 to the end of the array
//write your code here
numbers.push(5); // added 5 to the end of the array
console.log(numbers); // checking the output of the array
console.log(numbers[5] === 5 && numbers.length === 6); // stating the 5th index of numbers is equal to 5 and the total index of numbers is 6
