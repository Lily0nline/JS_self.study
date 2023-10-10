/*
With the rest parameter we can assign multiple arguments to an array. 
To do so, we simply define a parameter prefixed with 3 dots (...args).
*/

/*
A parameter is a variable in a function definition.
It is a placeholder and hence does not have a concrete value.

An argument is a value passed during function invocation.

ex:
function hello (x,y){ //x, y is a parameter
    return x + y
}
hello(3, 4) // 3,4 is an argument
*/


function func(...args) { //function with an array args as a parameter
    console.log(args); // print args
  }
  func(1, 2); //[1, 2]
  func(10, 'string', 1); //[10, 'string', 1]
  func(5, {a: 1}, 3, 2, 1); // [5, {a: 1}, 3, 2, 1]
  //all of these will be called as an array | there's no formula to do anything so it'll just copy and paste into an array
