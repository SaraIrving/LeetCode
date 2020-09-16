// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Example 2:

// Input: -123
// Output: -321

// Example 3:

// Input: 120
// Output: 21


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let revNum = x.toString().split('').reverse().join('');
  return parseInt(revNum) * Math.sign(x);
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
