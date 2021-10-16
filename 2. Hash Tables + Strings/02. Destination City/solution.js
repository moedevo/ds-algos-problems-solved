// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. 
// Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, 
// therefore, there will be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. 
// Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

function destCity (paths) {
    let start = []; // ["London","New York","Lima"]
    let next = []; // ["New York","Lima","Sao Paulo"]

    for (let i = 0; i < paths.length; i++){
        start.push(paths[i][0]);
        next.push(paths[i][1]);
    }
    // If next[i] doesn't exist in start return next[i]
    for (let i = 0; i < next.length; i++){
        if (!start.includes(next[i])) {
            return next[i]
        }
    }  
};
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))