//callback function is basically a function being in a parameter 

function logResult(result) { //adding result as a parameter in a new function
    console.log(result); //printing the var result
  }
  function multiply(a, b, callback) { //the name of the callback function doesnt really matter
    const result = a * b; // new var with a value that multiplies the parameter a and b 
    callback(result) // console.log(result) => same output | logResult(result) => same output | this is a function in a function
  }
  multiply(2, 3, logResult); //calling the function and adding the arguments

  /*
  function multiply (2, 3, callback){
      const result = 2 * 3; // first mulitply 2 * 3 
      callback(result) // the parameter callback has the value of result but has not printedit 
  }
  mulitply(2,3, logResult); // this calls the function multiply and says the parameter a, b will have the value of 2,3 
  and the parameter callback will have the value of the function logResult 
  */

  /*
  function logResult(result){
    console.log(result);
  }
  function multiply(a,b, logResult){
    const result = a * b
    logResult(result)
  }
  multiply(2,3, logResult)
  */ //this has the same output as the first one above