
// Solution 1

function maxPRofit(prices){
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;

  for(var i = 0; i<prices.length-1; i++){
    
    if(prices[i] < min){
      min = prices[i]
      console.log(min)
    }else if (prices[i]-min > max){
      max = prices[i]-min
      console.log(min)
    }
  } return max
};

var prices = [7, 1, 5, 6, 3];
console.log('profit', maxPRofit(prices));
















