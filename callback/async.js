// function pause() {
//     const start = new Date().getTime();
//     while (new Date().getTime() - start < 3000);
//     console.log('Hello!');
//   }
   
//   pause();
//   console.log('Another log message.');

  //nothing happens for 3 seconds before the 2 log messages appear.
  //during the 3 seconds, the entire website would be unresponsive. 
  //if you were to clickon any button on the website, nothing would hapen until 
  //the pause function was done executing. The reason is that JS was busy executing a while-loop for 3 seconds

  //This is where async programming comes into play.

  function func(){
    console.log('Hello'); //print 'Hello' when func is called
  }
  setTimeout(func, 3000); //before running func wait 3 seconds [5000 = 5 seconds; 500 = 0.5 seconds]
  console.log('another message') // print 'another message'

  // 'another message' was executed before the function func because of the setTimeout method.