/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  for (let i = 0; i < nums.length; i++) {
    let numOfDuplicates = 0;
    for(let j = 0; j < nums.length; j++) {

      if (nums[i] === nums[j]) {
        numOfDuplicates += 1;
      }
    }
    if (numOfDuplicates === 1) {
      return nums[i];
    }
  }
    
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));