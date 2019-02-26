// String Compression
// Time Complexity = linear
// Space Complexity = constant;

let stringCompression=(s)=>{

  let output = '';
  let count = 1;

  for(let i =0; i<s.length; i++){
      let curr = s[i];
      let next = s[i+1];

      if(curr === next){
        count++;
      }else{
        output+= curr + count;
        count = 1;
      }


  } return output.length < s.length ? output:s;

};

console.log(stringCompression('aabcccaaaa'));

//Output : a2b1c3a4
