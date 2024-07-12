// ❓ DESCRIPTION:
// //     Given an array of integers, find the one that appears an odd number of times.
// //
// //     There will always be only one integer that appears an odd number of times.
// //
// //     Examples
// //     [7] should return 7, because it occurs 1 time (which is odd).
// // [0] should return 0, because it occurs 1 time (which is odd).
// // [1,1,2] should return 2, because it occurs 1 time (which is odd).
// // [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// // [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// ✅ SOLUTION:
function findOdd(A) {
    let obj = {};
    for(let i = 0; i < A.length; i++) {
        let num = 1;
        if (!(obj[A[i]])) {
            obj[A[i]] = 1;
        } else if (obj[A[i]]) {
            obj[A[i]]++;
        }
    }
    for(let key in obj){
        if(obj[key] % 2 !== 0){
            return parseInt(key);
        }
    }
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
