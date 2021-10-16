/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */
function trap (height) {
  let left = 0, right = height.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;

  while(left < right) {
    if (height[left] <= height[right]) { //maxLeft =  2     // total water = 4 
      if (height[left] >= maxLeft) { 
        maxLeft = height[left]
      } else { 
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) { // maxRight = 2  // totalWater = 4
          maxRight = height[right];
          
      } else {
          totalWater += maxRight - height[right];
      }
      right--;
    }
  }
  return totalWater;
}
console.log(trap ([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));