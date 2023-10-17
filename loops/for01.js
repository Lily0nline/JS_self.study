/* In the code below we have a for-loop where we create a counter-variable i with the value 1.
 As long as i is smaller than 3 the loop keeps running. After each iteration i is incremented by 1.
 In each iteration we log the current value of i. We als add the value of i to the variable result.
 
 Adjust the code such that the console.log() logs true 
 */

 let result = 0; 
 /* change this line */ for (let i = 1; i < 4; i = i + 1 ){ // solution is <= 3 in the middle or < 3
    console.log(i)
    result = result + i 
 }
 console.log(result === 6)



 /*
 i = 1 
 result = 0 + 1 => 1

 i = 2
 result = 1 + 2 => 3

 i = 3 
 result = 3 + 3 => 6 

  */
