// ❓ DESCRIPTION:
//     Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// ✅ SOLUTION:
function sumDigits(number) {
    let sum = 0;
    String(number).split('').forEach((elem) => {
        if(!isNaN(parseInt(elem))){
            sum +=parseInt(elem);
        }
    })
    return sum;
}
console.log(sumDigits(123));