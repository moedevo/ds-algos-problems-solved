// Creating a hashtable
// Looping through the input elements
// If the element is already exist in the hashtable return it
// Otherwise add it to the hash table
// If there's no recurring number show undefined

function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
      if (map[input[i]]) {
          return input[i];
      }
      else {
          map[input[i]] = true;
      }
  };
  return undefined
};

console.log(firstRecurringCharacter([1,3,4,2,2])) // returns 2
console.log(firstRecurringCharacter([3,1,3,4,2])) // returns 1
console.log(firstRecurringCharacter([1,1,2])) // returns undefined
// This solution is good for time complexity => Big O (n)