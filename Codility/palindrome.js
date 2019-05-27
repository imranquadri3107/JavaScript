function palindrome(str){
  console.log(str)
var result = '';
for(var i=str.length-1; i>=0; i--){
    result += str[i];
    console.log(result)
} if(result === str){
  return 'Yes'
}else{
  return 'No'
}

}

palindrome('imran')
