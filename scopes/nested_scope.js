/* Nested scopes practice */

let y = 3;
const z = 2;

function outer() {
    y = 7
    function inner(){
        const y = 5
      console.log(y)
    }
    inner();
    console.log(y+z)
}

console.log(y) // 3
outer(); // 5, 12