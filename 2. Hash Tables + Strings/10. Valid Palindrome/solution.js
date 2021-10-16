// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//               L                   R

function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    let left = 0; right = s.length - 1;
    
    while(left < right) {
        if(s[left] !== s[right]) {
            return false
        }   
        left++;
        right--;
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))