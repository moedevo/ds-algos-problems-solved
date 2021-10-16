// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]


function smallerNumbersThanCurrent (nums) {
    result = []
    let sortNums = nums.slice().sort((a, b) => a - b)
    console.log(sortNums)

    for (let i = 0; i < nums.length; i ++) {
        result.push(sortNums.indexOf(nums[i]))
    }
    return result
};
console.log(smallerNumbersThanCurrent ([8,1,2,2,3]))