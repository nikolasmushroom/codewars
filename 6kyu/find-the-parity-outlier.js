// ❓ DESCRIPTION:
//     You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
//     Examples
//     [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// ✅SOLUTION:
function findOutlier(integers){
    let oddArr = [];
    let evenArr = [];
    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0){
            evenArr.push(integers[i]);
        }else if(integers[i] % 2 !== 0){
            oddArr.push(integers[i]);
        }
    }
    if(oddArr.length < evenArr.length){
        return oddArr[0];
    }else{
        return evenArr[0];
    }
}

console.log(findOutlier([1, 3, 5, 7, 8]))