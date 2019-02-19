function findMax(arr){
  var max = arr[0];
  for(var i = 0; i<arr.length; i++){
    if(arr[i]> max){
      max = arr[i];
    }
  }return max;
}

findMax([1,3,5,3])
output: 5


function longestNum(arr){
  var long = []
  for(var i = 0; i<arr.length; i++){
    var innerArray = findMax(arr[i])
    long.push(innerArray);

  }return long;
}

longestNum([[1,3,5,3], [547,23,54]])
Output: 5, 547
