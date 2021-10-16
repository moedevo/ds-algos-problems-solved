// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

function intersect(nums1, nums2) {
    return nums1.filter(item => {if(nums2.includes(item)) return nums2.splice(nums2.indexOf(item), 1) || true;})
};
console.log(intersect([1,2,2,1],[2,2]))