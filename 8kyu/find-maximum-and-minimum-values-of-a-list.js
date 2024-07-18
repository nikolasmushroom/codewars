// ❓ DESCRIPTION:
//     Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//     * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//     * [42, 54, 65, 87, 0]             -> min = 0, max = 87
//     * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// ✅ SOLUTION:
let min = function(list){
    let min = list[0];
    for(let i = 1; i < list.length; i++){
        if(list[i] < min){
            min = list[i];
        }
    }
    return min;
}

let max = function(list){
    let max = list[0];
    for(let i = 1; i < list.length; i++){
        if(list[i] > max){
            max = list[i];
        }
    }
    return max;
}
console.log(min([1, 2, 3, 4, 5, 6, 7, 8, 50]), max([1, 2, 3, 4, 5, 6, 7, 8, 9]));