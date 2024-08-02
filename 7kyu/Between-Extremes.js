// ❓ DESCRIPTION:
// Given an array of numbers, return the difference between the largest and smallest values.
//
//     For example:
//
//     [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
//
//     [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
//
//     The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

//✅ SOLUTION:
function betweenExtremes(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    for(let element of numbers){
        if(min > element){
            min = element;
        }
        if(max < element){
            max = element;
        }
    }
    return max-min;
}

console.log(betweenExtremes([1, 2, 3, 3, 5, 6, 7, 8]))