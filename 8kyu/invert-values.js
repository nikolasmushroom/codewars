// ❓ DESCRIPTION:
//     Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
//     [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []
// You can assume that all values are integers. Do not mutate the input array.

// ✅ SOLUTION:
function invert(array) {
    let res = [];
    for(let element of array){
        if(element > 0){
            res.push(-element);
        }else{
            res.push(Math.abs(element));
        }
    }
    return res;
}

console.log(invert([1, -2, 3, 4, 5, 6]));