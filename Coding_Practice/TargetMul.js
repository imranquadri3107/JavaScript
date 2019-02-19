function repeatStringNumTimes(str, num) {
  // repeat after me
    var result = '';
    if(num<0){
      return '';
    }
    for(var i=0; i<num; i++){
      result = result+str
    }

  return result;
}

repeatStringNumTimes("*", 50);


// Solution 2

function repeatStringNumTimes(str, num) {
  // repeat after me
return str.repeat(num);
}

repeatStringNumTimes("a", 50);
