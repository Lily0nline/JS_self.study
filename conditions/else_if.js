/*
if...else statements give you an either-or choice but sometimes you have scenarios with more choices.
In this exercise we use an else-if block to add one more possibility. 
Adjust the code below such that the value of text will be 'num is greater than 1'
*/

let text;
/*change this line*/const num = 3; // any number higher than 2 will run the first string, lower/equal to 1 will run string 3 therefore the number 2 will run the 2nd string.
if (num > 2){ //stating the condition " if num is greater than 2"
    text = 'num is greater than 2' // change the value of text to this string
}else if (num > 1){ // or if num is greater than 1
    text = 'num is greater than 1' //change the value of text to this string
}else {
    text = 'num is smaller than or equal 1' //if neither conditions are met change it to this string
}
console.log(text); // (num is greater than 2) | since the current value of num => 3 is greater than two the first string was run


