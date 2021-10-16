/*
- Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function(s, t) {
  return [...s].sort().join('') === [...t].sort().join('');
};

var isAnagram2 = function(s, t) {
  if (s.length !== t.length) return false;
  
  let map = {}; // 
  
  for (let i = 0; i < s.length; i++) {
      map[s[i]] = map[s[i]] + 1 || 1;
  }
  for (let i = 0; i < t.length; i++){
      if (!map[t[i]]) {
          return false
      } else {
          map[t[i]] --;
      } 
  }
  return true
};
console.log(isAnagram2("anagram","nagaram"))