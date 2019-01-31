// Algorith to check for the unique character which returns true or false
// Time Complexity & Space Complexity = O(n) Liner because will be checking each and every character in the string

function Unique(s){
  var store = {}

  for(var i=0; i<s.length; i++){
    var c = s[i]
    if(store[c]){
      return false
    } else {
      store[c] = true
    }
  } return true
}

console.log(Unique(['a', 'v', 'c']));
console.log(Unique('acd'));
