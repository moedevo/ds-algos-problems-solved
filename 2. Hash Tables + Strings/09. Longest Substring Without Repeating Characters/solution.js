// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Sliding Window Technique

function lengthOfLongestSubstring(s) {
    if (s.length <= 1) return s.length;
    
    const seen = new Map();
    let left = 0, longest = 0;
    
    for (let right = 0; right < s.length; right++){
        const currChar = s[right];
        const prevSeenChar = seen.get(currChar);
        
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seen.set(currChar, right);
        longest = Math.max(longest, right - left + 1)
    }
    return longest;
};
console.log(lengthOfLongestSubstring("abcabcbb"))

// If the length of the string is 1 or lesser return that length.
// Creating a map. 
// looping through the string and setting every chars to the map
// if the current char have seen previously get that current character and store it in prevSeenChar
// if prevSeenChar >= left => store it in left
// set current char to right and begin sliding window again.
// check the length for every sliding window and compare it to longest and get the longest value.
