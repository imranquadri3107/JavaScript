// function repeatStringTimes(str, num){
//   if(num <0) return '';

//   return str.repeat(num);
// }

// repeatStringTimes('abc', 3)

function repeatString(str, num){
  var final = '';
  if(num<0) return '';

  for(var i=0; i<num; i++){
    final+=str;
  }
  return final
}
repeatString('abc', 3)
