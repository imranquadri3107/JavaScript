// Time Complexity = Linear O(n)
// Space Complexity = Linear O(n)

let uniqueArray = (a)=>{
  let seen = {};
  let result = [];

  for(let i = 0; i<a.length; i++){
    let el = a[i];
    if(!seen[el]){
      seen[el] = true;
      result.push(el);
    }
  }
  return result;
}
uniqueArray([1,2,3,3,4,5])
