/* 
Here, we have a function calculatePrice that calculates the total price of a product.
We execute that function and save the result in the variable total.
But, the code will not work like this because we can not access the variable result from outside the function.

Correctly save the result of calculatePrice in the variable total.
*/

const price = 10; //declared the variable with value 
const quantity = 5; //these two are global scope variables since it can be called anywhere
 
function calculatePrice() { //created a function
    const result = price * quantity; // declared a function scope / local scope variable; can only be identified inside the function
    return result; // return the value of result to the function
};
 // change the two lines below
calculatePrice();
const total = result;
 /*
 to have the output 50 since 'result' is a func scope and cannot be identified outside of the function,
 you should change the value of 'total' to 'calculatePrice()' since the value of result will return to the function anyway.
 */

console.log(total);
// expected output = 50
