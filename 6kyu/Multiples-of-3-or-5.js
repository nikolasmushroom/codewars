// ❓  Description:
//     If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.
//
//     Courtesy of projecteuler.net (Problem 1)

// ✅ Solution:
function solution(number){
    let numsArr = [];
    for(let i = 2; i<number; i++){
        if(i%3===0||i%5===0){
            numsArr.push(i);
        }
    }
    return !numsArr.length ? 0 : numsArr.reduce((sum, elem) => sum+elem);
}

console.log(solution(30))