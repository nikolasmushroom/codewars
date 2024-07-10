// ❓ DESCRIPTION:
//     Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//
//     For example:
//
//     ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// ✅ SOLUTION:
function evenNumbers(array, number) {
    let res = [];
    for(let i = array.length - 1; i >=0; i--){
        if(array[i] % 2 === 0){
            res.unshift(array[i]);
        }
        if(res.length === number){
            break;
        }
    }
    return res;
}

console.log(evenNumbers([8,-96,-81,-69,45,51,-92,12,-12,-50,2,46,16,-54,-71,-90,-71,1,16,-71,34,-63,21,90,0,19,44,92,43,-38,14,43,-88,-71,-12,-62,76,62], 6));