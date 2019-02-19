// Solution 1
function largestOfFour(arr) {
 var maxes = [];
  for (var i =0; i<arr.length; i++){
    var newArray = arr[i].sort((a,b)=> a-b);
    var result = newArray[newArray.length-1];
    console.log(result);
    
  }
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Solution 2

function largestOfFour(arr) {
var maxes = [];

  for(var i =0; i<arr.length; i++){
    var tempMax = arr[i][0];
  //  console.log(tempMax);

    for(var j=0; j<arr[i].length; j++){
        var currentElement = arr[i][j];
        //console.log(currentElement);

        if(currentElement >= tempMax){
          tempMax = currentElement;
        }
    }
    maxes.push(tempMax);

  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
