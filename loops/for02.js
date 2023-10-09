/*
This exercise shows how you can use a loop to iterate over the elements of an array. 
In this example, we will filter numbers from an existing array. The loop iterates over each element of the array mixed. 
If the current element is of type number, it will append it to the array newArray.
To solve this task, complete the loop expressions inside the brackets.
*/

const mixed = [10, 4, 'c', 6, 'a', 4]
const newArray = []

/*change this line*/ for (let i = 0; i < mixed.length; i++) { // indicate i to have the value 0, i < the total index of mixed, increment i 
    const current = mixed[i]; // declaring a new variable to have the variable mixed's index as it's value
    if (typeof current === 'number'){ //if the type of the variable current is a number 
        newArray.push(current) // push the values of 'current' to 'newArray' 
    }
}

console.log(newArray) // checking the output 