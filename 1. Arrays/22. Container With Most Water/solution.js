// You are given an array of postive integers where each integer represents the height of a vertical line on chart.
// Find two lines which together with x-axis forms a container that would hold the greatest amount of water.
// Return the area of water it would hold.


function maxArea (heights) {
    let maxArea = 0;
    let p1 = 0;
    let p2 = heights.length - 1;
    
    while (p1 < p2) {
        height = Math.min(heights[p1],heights[p2]);
        width = p2 - p1;
        area = width * height
        maxArea = Math.max( maxArea , area);
        
        if (heights[p1] <= heights[p2]) {
            p1 ++;
        } else {
            p2 --;
        }
    }
    return maxArea;    
};
console.log(maxArea([4,8,1,2,3,9]))