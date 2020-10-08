/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?

 

Example 1:

Input: x = 121
Output: true

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:

Input: x = -101
Output: false

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    //if it is a negative number
    return false;
  }

  let stringNum = x.toString();

  if (stringNum.length === 2) {
    //if it is only two digits
    if (stringNum[0] !== stringNum[1]) {
      return false;
    }
  } else if (stringNum.length % 2 === 0) {
    //if there is an even number of digits
    for (let i = 0; i < stringNum.length / 2; i++) {
      if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
        return false;
      }
    }
  } else if (stringNum.length % 2 === 1) {
    //if there are an odd number of digits
    for (let i = 0; i < Math.floor(stringNum.length / 2); i++) {
      if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
        return false;
      }

    }
  }
    
  return true;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(-101))