/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

 

Note: You may assume the string contains only lowercase English letters.

*/

var firstUniqChar = function(s) {
  if (s) {
    for (let i = 0; i < s.length; i++) {
      let count = 0;
      for (let j = i; j < s.length; j ++) {
        if (s[i] === s[j]) {
          count += 1
        }
      }
  
      if (count === 1) {
        return i;
      }
  
    }
    return -1;

  } else {
    return -1;
  }

    
};

console.log(firstUniqChar('leetcode')); //0
console.log(firstUniqChar('loveleetcode')); //2