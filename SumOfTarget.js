/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
function twoSum(nums, target) {
for(var i =0; i<nums.length; i++){
  let c = nums[i];
  let d = nums[i+1];
  if(c + d === target){
    return true;
  }
  
}return false; 
    
};

twoSum([2, 7, 11, 15], 9);

