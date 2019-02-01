// Reverse String
type-1
function reverse(str){
  var rtnstr = '';

  for(var i = str.length-1; i>=0; i--){

    rtnstr+= str[i];
  }
  return rtnstr;
}
reverse(['hi' +' '+ 'hello' +' '+  'imran']);

type-2

function reverse(str){
  var rtnstr = [];
  
  if(!str || typeof str !='string' || str.length <2)

  return str;

  for(var i=str.length-1; i>=0; i--){
    rtnstr.push(str[i]);
  }

  return rtnstr.join('');
}

reverse('imranquadri')

// type 3

function reverse(str){
  return str.split(' ').reverse()
}

reverse('I am a Computer Science Graduate')












