function solution(num){
  num = num.toString();
  console.log(num);
  var result = "";
  var front = 0;
  var back = (num.length)-1;


  while(front < back){
    result+= num.charAt(front);

    result+= num.charAt(back);
    
    front++
    back--;
  }

  if(num.length%2!==0){
    result+= num.charAt(num.length/2);
  }

return console.log(parseInt(result));

}
solution(1234);
