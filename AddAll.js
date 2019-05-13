// Function to add all elements of an array

function sum(){
  var args = Array.prototype.slice.call(arguments);
  var result = 0;
  for(var i = 0; i<args.length; i++){
    result = result+args[i];
  }
  return result
}

console.log(sum(2,3,5,6));


// Type 2 

// Function to add all elements of an array

const sumAll =(...rest)=>{
  let result = 0;
  let len = rest.length
  for(let i = 0; i<len; i++){
    result+=rest[i];
  }
  return result
}

console.log(sumAll(2,3,5,6));
