// Given a string array words, return an array of all characters that show up in all strings 
// within the words (including duplicates). You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

function commonChars (words) {
    let wordsMap = words.map((x) => [...x]); 
    // Store words in a map and spread them.
    // [['b', 'e', 'l', 'l', 'a'],['l', 'a', 'b', 'e', 'l'],['r', 'o', 'l', 'l', 'e', 'r']]
    let head = wordsMap.shift();
    // head = ['b', 'e', 'l', 'l', 'a']

    // filter every character in the head then check them with other words characters
    // if it is matched and index >= 0 return that character.
    return head.filter((x) => wordsMap.every((word) => {let index = word.indexOf(x);
    if (index >= 0 ){ return (word[index] = true ) }}))
};
console.log(commonChars(["bella","label","roller"]))
