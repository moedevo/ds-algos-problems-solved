// function hasPairWithSum(array, sum) {
//   const map = new Map ();
//   for(let i = 0; i < array.length; i++) {
//     let currVal = array[i];
//     if (map.has(currVal)) {
//       return [map.get(currVal),i]
//     }
//     let diff = sum - currVal
//     map.set(diff,i)
//   }
// };
// console.log(hasPairWithSum([2,2,4,4], 8))


function twoSum (nums, target) {
  let numsMap = {}; // [0] : 10 ,[1] : 8 , [2] : 4 , [3] : 2 , [4] : 9
                    // [0] : 1 , [1] : 3 , [2] : 7 , [3] : 9 , [4]: 2 ,
  console.log(numsMap)

  for (let p = 0; p < nums.length ; p++){
    if (numsMap[nums[p]] >= 0) {
      return [numsMap[nums[p]],p]
    } else {
      numToFind = target - nums[p]
      numsMap[numToFind] = p;
    }
  }
  return null;
   
};
console.log(twoSum([1,3,7,9,2],11))