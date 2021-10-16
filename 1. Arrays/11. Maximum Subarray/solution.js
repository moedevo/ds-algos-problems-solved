// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-1,2,3,-5,4]
// Output : 5

function maxSubArray(nums) {
    let solution = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+ nums[i - 1])
        solution= Math.max(solution,nums[i])
    }
    return solution;
};
console.log(maxSubArray([-1,2,3,-5,4]))