// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

function checkIfPangram(sentence) {
    set = new Set();
    if (sentence.length < 26) return false;

    for (let i = 0; i < sentence.length; i++){
        set.add(sentence[i]);
    }
    return set.size === 26 ? true : false
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))