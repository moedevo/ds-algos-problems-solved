// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1

function thirdMax (nums) {
    let sortNums = nums.sort((a,b) => b-a);
    let count = 0;
    for (let i = 0; i < sortNums.length -1; i++) {
        if(sortNums[i] !== sortNums[i+1]) {
            count++;
            if(count === 2) {
                return sortNums[i+1];
            }
        }
    }
    return sortNums[0];
};
console.log(thirdMax([1,2]))