// Function to return a string containing all visible letter, read in row-major order.

function solution(){
  var elem = document.getElementsByTagName('td');
  var result = " ";
  for(var i = 0; i<elem.length; i++){
    var currElement = elem[i];

    if(currElement.style.color !== currElement.style.backgroundColor){
      result += currElement.innerHTML;
    }
  }
  return result;
}
