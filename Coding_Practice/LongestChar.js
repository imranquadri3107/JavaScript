function findLongestWordLength(str) {
  var newStr = str.split(' ')
  var result = []
  for(var i =0; i<newStr.length; i++){
    var c = newStr[i];
    if(c.length > result.length)
     result = c
    else 
    continue;
  }
  
  return console.log(result, result.length);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog" );



//Tab 2 for finding character more than length 6

function findLongestWordLength(str) {
  var newStr = str.split(' ')
  var result = []
  for(var i =0; i<newStr.length; i++){
    var c = newStr[i];
    if(c.length >= 6)
     result.push(c)
    else 
    continue;
  }
  
  return console.log(result, result.length);
}

findLongestWordLength("The quwsdeick brown foxertret jumped over the lazy dog" );
