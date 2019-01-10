// Promises in JavaScript. Why use promises
// When you want to make an async call which has to wait for something to happen and then once it comes back you exit with a callback function. 
//And withing that callback's function you might do another ajax call which can wait for another result and you would have another callback function.


let promiseToClean = new Promise(function(resolve, reject){
  // cleaning the room
   let isClean = true;

  if(isClean){
    resolve('Clean');
  } else{
    reject('not Clean');
  }


});

promiseToClean.then(function(fromResolve){
  console.log('the room is '+ fromResolve);
}).catch(function(fromReject){
  console.log('Room is '+ fromReject);
})


// Example 2
// If we want to fire all promise at once
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){ 
  console.log('one of them is finished')
});

// Example 3
// it will console log even if one promise is fulfilled
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('one of them is finished')
});
