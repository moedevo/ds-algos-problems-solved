function merge (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length) // nums1 = [1,2,3]
    nums1.push(...nums2.splice(0,n)) // nums1 = [1,2,3,2,5,6]
    nums1.sort((a, b) => a - b); // nums1 = [1,2,2,3,5,6]
    return nums1
};
console.log(merge([1,2,3,0,0,0],[3],[2,5,6],[3]))