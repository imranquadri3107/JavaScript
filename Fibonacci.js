// Fibonacci

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (n){
  if(n<=1){
    return n;
  }

  var a =0, b=1, c=0;

  //console.log(fib(2))

  for(var i = 1; i<n; i++){
    c = a+b;
    a = b;
    b = c;
  }

  return c;
}

fib(4);

//////

function fibo(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
} 

fibo(10);


// Tab 2

function fibo(n){
  if(n<=1){
    return n;
  } else{
    return fibo(n-1) + fibo(n-2)
  }
}

fibo(4)
