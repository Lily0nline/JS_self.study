//Adjust the code snippet so that the value 0 is logged first then the value 1.

// let count = 0;
// function increment() {
//  count = count + 1;
// }
// increment(); //change these two lines 
// setTimeout(() => {  //change these two lines 
  
//   console.log(count);
// }, 1000);
 
// console.log(count);

let count = 0;
function increment() {
 count = count + 1; //new value of count will but current number + 1
}
setTimeout(() => { 
  increment(); //call the function
  console.log(count); // print the new value of count // can also just add this inside the function
}, 1000); // after 1 second

console.log(count); //print the global scope of count // 0
