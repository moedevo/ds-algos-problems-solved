// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]

function getConcatenation(nums) {
    return [...nums,...nums]
};
console.log(getConcatenation([1,2,1]))