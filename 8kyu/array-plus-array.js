// ❓ DESCRIPTION:
//     I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
//     P.S. Each array includes only integer numbers. Output is a number too.

// ✅ SOLUTION:
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for(let element of arr1){
        sum+=element;
    }
    for(let element of arr2){
        sum+=element;
    }
    return sum;
}

console.log(arrayPlusArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 0]));