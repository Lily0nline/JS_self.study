/* Nested Scopes */

const x = 'global'; //declared a global variable
function outer() {
 const x = 'outer'; // declared a new variable and value; didn't print
 function inner() {
  const x = 'inner'; // delcared a new variable and value
  console.log(x); // printed the value 
 }
 inner(); // calling function inner | prints the value of inner's x
 console.log(x); // printed the value of the function outer's variable value
}
outer(); // calling function outer | prints the value of outer's x 
console.log(x); // prints the global x 

//expected output : inner, outer, global | the inner function was printed & called; then the outer and lastly the global

// global (parent) -> outer (parent/child) -> inner (child) | hiearchy 
// the inner scope has access to the parent's data