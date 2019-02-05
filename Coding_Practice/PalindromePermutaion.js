//Program to check if it is a permutation of a palindrome

// Time Complexity = linear
// Space Complexity = linear

let palPerm = (s)=>{
  // if even:  there must be two of every char
  //if odd: there must be only one unique char

  //use object to store letters
  //if we see the same letter again delete from object
  //check hash at the end: odd -1key left, even -no key left
  //skip spaces


  let hash = {};
  let charCount = 0;

  for(let i = 0; i<s.length; i++){
    let c = s[i];
    if(c === ' '){
      continue;
    }
    if(hash[c]){
      delete hash[c];
    }else{
      hash[c] = true;
    }
    charCount++;
  }

  if(charCount %2 === 0){
    return Object.keys(hash).length === 0;
  }else {
    return Object.keys(hash).length === 1;
  }

};

console.log(palPerm('racecar'))
