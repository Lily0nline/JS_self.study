/*
Sometimes we want to know where a specific element is located inside an array.
That's what the method array.indexOf()is for. 
This method returns the index position of a specific element inside an array.
Syntax : indexOf(searchElement)
         indexOf(searchElement, fromIndex)

Example: 
['a', 'b'].indexOf('a') returns 0 because that's the index of the string 'a' within the given array.

You can also find out if a specific element is not present inside an array.

Example: 
['a', 'b'].indexOf('c') returns -1 which means that 'c' does not exist in the array.

In the code below we use the array.indexOf() method to get the index of an element. 
Later on, we use that index to retrieve this element
and compare it to the expected value. But there's something mixed up. 

Change the code below such that the console.log()statement logs true.
 */


const arr = [1, 2, 3, 4]; // new array declared
/*change this line*/const index = arr.indexOf(3); //to make the statement true the number inside () should be 2
console.log(arr[index]) //console I added to see the output
console.log(arr[index] === 2); //stating the current index returned is equal to 2

// const test = ['a', 'b', 'c', 'd'];
// const index = test.indexOf('d'); //declaring the value of index will be the picked value from test.
//  console.log(test[index]); //this states in the variable test what value was given.
// // console.log(index) // this shows the index position of 'd' => 3
// // console.log(test.indexOf('d')); //this also shows the index position of 'd' => 3