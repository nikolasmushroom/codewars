// ❓ Description:
// Implement a function that returns the minimal and the maximal value of a list (in this order).

// ✅ Solution:
function getMinMax(arr){
    return [Math.min(...arr),Math.max(...arr)];
}
console.log(getMinMax([1,2,3,4,5,6,7,8]))