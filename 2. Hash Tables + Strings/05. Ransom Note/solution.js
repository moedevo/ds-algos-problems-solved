/*
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function canConstruct(ransomNote, magazine) {
  return [...ransomNote].every((char) => {
    const old = magazine;
    magazine = magazine.replace(char,"");
    return old !== magazine;
  })
};
console.log(canConstruct("abab","ab"))
/*
- Convert from "abab" into "a","b","a","b".
- Assign old = magazine = "ab"
- replace "ab" with "a","b","a","b" that will replace only a,b => magazine = "ab"
- old ==! magazine return true and then return for all the function
- 
 */