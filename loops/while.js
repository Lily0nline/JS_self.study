/*
In this exercise you will learn how to create a while loop.
This loop is very similar to a for loop. 

The syntax is :
while (condition) { statement }. 
It reads: As long as the condition is met, execute the statement.

It's basically an if statement that is repeated until the condition is no longer met.

In the example below we execute a while loop. 
As long as the condition of the loop is met, num increases by 2 and i by 1.
Adjust the condition of the while loop so that the final value of num is 60.
*/

let num = 0;
let i = 0;

/*change this line*/while ( i < 10 ) { //to solve this i < 30 or <= 29 | while i is less than 10
   num = num + 2; // the new value of num will be the current value of num + 2
   i = i + 1; // the new value of i will be the current value of i + 1 
}

console.log(num); //checking the output of num

/*
0<10
num = 0 + 2
i = 0 + 1
console.log(num) //2
---

1 < 10
2 + 2 = 4
1 + 1 = 2
---

2 < 10
4 + 2 = 6
2 + 1 = 3
---
3 < 10
6 + 2 = 8
3 + 1 = 4
---
4 < 10
8 + 2 = 10
4 + 1 = 5
---
5 < 10 
10 + 12 = 12
5 + 1 = 6
---
6 < 10
12 + 2 = 14
6 + 1 = 7
---
7 < 10 
14 + 2 = 16
7 + 1 = 8
---
8 < 10 
16 + 2 = 18
8 + 1 = 9
---
9 < 10 
num = 18 + 2 = 20
i = 9 + 1 = 10
---
10 !< 10 -- stop

*/