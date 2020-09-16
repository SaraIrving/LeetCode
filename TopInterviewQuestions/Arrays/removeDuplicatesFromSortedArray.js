/* 
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
*/




/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  //what they actually want is a count of the unique characters in a sorted array 
  
  //loop through the nums array, if the element is not equal to current element then it is a distinct     value and we want to keep it, also want to change currentElement to be equal to it
  
  // if the element is equal to currentElement then it is a duplicate and we want to delete it from       the nums array using the splice method (index of thing to delete, 1)

  if (nums.length === 0) {
    return 0;
  }

  let currentElement;
  let count = 0;

  for (let i = 0; i < nums.length; i ++) {
    //console.log('currentElement = ', currentElement);
      if (nums[i] !== currentElement) {
        //console.log('inside the if, nums[i] = ', nums[i]);
        currentElement = nums[i];
        count += 1;
      } 
              
  
  };
  
  return count;
  
};

nums = [1,1,2];
// console.log('nums before = ', nums);
console.log(removeDuplicates(nums));
// console.log('after =', nums);

nums2 = [0,0,1,1,1,2,2,3,3,4];
// console.log('nums2 before = ', nums2);
console.log(removeDuplicates(nums2));
// console.log('after =', nums2);