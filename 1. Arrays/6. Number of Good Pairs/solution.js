// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

function numIdenticalPairs (nums) {
   let map = {};
   let count = 0;
   
   for (num of nums) {
       if (map[num]) {
           count = count + map[num]
           map[num] = map[num] + 1 
       } else {
           map[num] = true;
       }
   };
   console.log(map)
   return count;
};
console.log(numIdenticalPairs([1,1,1,1]));

// Note: (for of) return values (for in) return indexes
// let list = [4, 5, 6];

// for (let i in list) {
//    console.log(i); // 0,1,2
// }

// for (let i of list) {
//    console.log(i); // 4,5,6
// }