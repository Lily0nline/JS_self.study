

function sumNumbers(...numbers) { //function with an array of numbers as the parameter
    let sum = 0; //declaring variable 
    for (let i = 0; i < numbers.length; i++) { // stating i has the value of 0; i is less than the total index of numbers; increment i
      sum = sum + numbers[i]; // change the value of sum to be the current value of sum added with the index of the array numbers
    }
    console.log(sum); //print the value of sum 
  }
   
//   sumNumbers(4, 5); 

/* step by step of sumNumbers(4,5)
sum = 0
i = 0; i < 2 ( 2 = the total of the given parameter/argument ); increment i 
sum = 0 (current value of sum) + 4 (the first index of the numbers array)
sum = 4
i++ => i = 1 
i = 1; i < 2 
sum = 4 + 5 (the next index in the numbers array)
= 9 
i++ => i = 2
2 !< 2 -- stop
console.log(sum) -> 9

*/

//   sumNumbers(4, 5, 6);
//   sumNumbers(4, 5, 10, 2, 3);
//   sumNumbers();