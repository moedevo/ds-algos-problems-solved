// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

function singleNumber(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            delete map[nums[i]];
        }
        else {
            map[nums[i]] = true;
        }
    };
    console.log(map)
    return Object.keys(map)[0]
};
console.log(singleNumber([2,2,1]))