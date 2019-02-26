function maxChar(arr){
   var result = [];
   for(let i=0; i<arr.length;i++){
     let curr = arr[i];
     if(curr.length >= 6)
       result.push(curr);
     
   }

   return result;
     
 
 }
 
 maxChar(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']);
