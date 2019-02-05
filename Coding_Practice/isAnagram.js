// Time Complexity = Linear O(n)
//Space Complexity = Linear O(n)


const isAnagram = (s1, s2)=> {
  let hist={};
  for(let i = 0; i< s1.length; i++){
    let char = s1[i];
    if(hist[char]){
      hist[char]++
    }else{
      hist[char] = 1
    }
  }
  for(let i = 0; i<s2.length; i++){
    let char = s2[i];
    if(hist[char]){
      hist[char]--;
    }else{
      return false;
    }
  }
  for(let key in hist){
    if(hist[key]){
      return false;
    }
  }
  return true;
}
isAnagram('arc', 'cra');
