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
