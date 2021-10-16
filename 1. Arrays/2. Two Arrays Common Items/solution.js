// Solution 2: 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(array1,array2) {
    // Creating an object.
    let map = {}; 
    // Looping through the first array.
    // If item not exist in the object we gonna add it.
    // after that we will have an object call map contains map = {a:true,b:true,c:true,x:true}
    for (let i = 0; i < array1.length; i++){ 
        if (!map[array1[i]]){
            const item = array1[i];
            map[item] = true
        } 
    }
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]){
            return true
        }
    }
    return false
}
console.log('Better Solution =>',containsCommonItem2(array1,array2))
// Time Complexity: Big O(a+b)
// Space Complexity: Big O(n) we are creating an object
// This is a better solution

// Solution 3: Language specifcic solution
const ar1 = ['a', 'b', 'c', 'x'];
const ar2 = ['z', 'y', 'a'];
function containsCommonItem3(ar1,ar2){
    return ar1.some(item => ar2.includes(item))
}
console.log('Language Specific Solution => ',containsCommonItem3(ar1,ar2))

// to return multiple items in array
function containsCommonItem3(array1,array2) {
    let map=[];
    let set = new Set();
    for(let i=0; i<array1.length;i++){
        set.add(array1[i]);
    }
    for(let j=0; j<array2.length;j++){
        if(set.has(array2[j])){
            map.push(array2[j]);
            set.delete(array2[j]);
        }
    }
    return map;
}
console.log('Multiple Items =>',containsCommonItem3([4,9,5],[9,4,9,8,4]))

