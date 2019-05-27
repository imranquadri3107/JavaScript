const longest=(str)=>{
  str = str.split(' ')
  result = '';

  for(var i=0; i<str.length; i++){
    var curr =str[i]
    if(curr.length > result.length)
      result =curr; 
  } return result.length
}
longest('The Quick brown fox overjump')
