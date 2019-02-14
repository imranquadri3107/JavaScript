function endw(str, target){
  if(str.substr(-target.length)=== target){
    console.log(str.substr(-target.length));
    return true;
  }else {
    return false;
  }
}
endw('notion', 'n');
