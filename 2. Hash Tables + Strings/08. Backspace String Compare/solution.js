// Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
// '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
const process = s => {
    const res = [];
    for (x of s.split('')) {
        x === '#' ? res.pop() : res.push(x);
    }
    return res.join('')
}

function backspaceCompare(s, t) {
    return process(s) == process(t)
};
var backspaceCompare
console.log(backspaceCompare("ab#c","ad#c"))