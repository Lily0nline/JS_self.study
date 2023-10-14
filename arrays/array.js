/*
You can put any value inside an array. 
Here, the array named arr even contains another array. 
You can also insert values from other variables into the array.
Insert the value of the variable string into the arr.
Insert it in the right place so that the console.log() statement logs true.
*/
const string = 'hello'; // declare a variable and value
/* change this line */const arr = ['a', [1, 2, 3]]; // declare an array with values

console.log(arr.length === 3 && arr[1] === string); // log a statement that says the length of arr is 3 and the first index is the string variable

//to state it true simply add the variable name string after 'a'.
//if you add string[i] it'll be unidentified since i hasnt been declared
//if you add string[1] the second index of string will run 'h'


