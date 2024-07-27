// ❓ DESCRIPTION:
//     Write a function with the signature shown below:
//
//     function isIntArray(arr) {
//         return true
//     }
// returns true  / True if every element in an array is an integer or a float with no decimals.
//     returns true  / True if array is empty.
//     returns false / False for every other input.

// ✅ SOLUTION:
function isIntArray(arr) {
    if(!Array.isArray(arr)){
        return false;
    }
    if(!arr.length){
        return true;
    }
    return arr.every((elem) => typeof elem === 'number' && !Number.isNaN(elem) && Math.floor(elem) === elem)
}

console.log(isIntArray([1, 2, 3, NaN]));