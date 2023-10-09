/*
An else statement is another piece of code - wrapped by curly braces - that only runs if the condition is not satisfied. 
Adjust the condition such that the code inside the else statement will be executed and the console.log() statement logs true
*/
let num = 0; // declaring a new variable and value
/*change this line only*/ if (2 > 1){ //stating a condition if 2 is greater than 1
    num = 1; //then the value for num will change 
} else { // if 2 is not greater than 1
    num = 2; //then the value for num will change into this instead
}
console.log(num === 2); //(false) | 2 is greater than 1 therefore num = 1; and 1 is not equal to 2.

/*change this line only*/ if (2 < 1){ // three ways to solve this: change the greater than (>) to less than (<), change it to (<=), or change 1 into a bigger number. 
    num = 1; 
} else { // since the condition of 2 being less than 1 is not true the else statement will run
    num = 2; //and the value of num will change to 2
}
console.log(num === 2); //(true) | the current value of num is 2 and 2 is equal to 2 therefore the console.log() runs true.