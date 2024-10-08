// ❓ Description:
//     In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).
//
// If n < 0, count by abs n from the end of the list.
//     If n == 0, return an empty list.
//
//     Examples
// each 0 [1,2,3,4,5,6] = []
// each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]
// each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]
// each 2 [1,2,3,4,5,6] = [2,4,6]
// each (-2) [1,2,3,4,5,6] = [5,3,1]
// each 3 [1,2] = []
// each (-3) [1,2] = []
// each 5 [1,2,3,4,5,6,7] = [5]
// each (-5) [1,2,3,4,5,6,7] = [3]

// ✅ Solution:
function each(n, xs) {
    return Math.sign(n) === 1 || Math.sign(n) === 0?
        xs.filter((elem, index) => (index+1)%n===0)
        :xs.reverse().filter((elem, index) => (index+1)%n===0)
    // if(Math.sign(n) === 1 || Math.sign(n) === 0){
    //     return xs.filter((elem, index) => (index+1)%n===0);
    // }else{
    //     return xs.reverse().filter((elem, index) => (index+1)%n===0);
    // }
}

console.log(each(3,[1, 2, 3, 4, 5]));