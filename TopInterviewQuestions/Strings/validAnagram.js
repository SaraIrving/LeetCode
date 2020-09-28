/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //if they're not the same length, then are not anagrams
  if (s.length !== t.length) {
    return false;
  };

  //if they are the same length, convert one to an array
  const t_array = t.split("");

  //loop through the other and make sure each character is included in the array
 for (let i = 0; i < s.length; i++) {
   if (!t_array.includes(s[i])){
     return false;
   } else {
     t_array.splice(t_array.indexOf(s[i]), 1);
   }
 };
 return true;
    
};

console.log(isAnagram("rat", "car")); //false
console.log(isAnagram('anagram', 'nagaram')); //true
console.log(isAnagram('sara', 'raas')); //true
console.log(isAnagram('house', 'hesuow')); //false-length
console.log(isAnagram('aacc', 'ccac')); //false-repeat of the same letters but in different quantities 
console.log(isAnagram('aaccbb', 'abcccc')); //false 