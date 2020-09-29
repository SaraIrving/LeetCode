/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const strippedS = s.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, '');

  for (let i = 0; i < Math.floor(strippedS.length / 2); i++) {
    if (strippedS[i] !== strippedS[strippedS.length - 1 - i]) {
      return false;
    }
  }
  return true;
    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));