// ❓ Description:
//     Compare 2 integers and return if they are equals, don't use the comparison Operators
//
// Can't use these Operators
//
// Operator	Description
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// Example:
//     0 == 0  => true
// 0 == 1  => false

// ✅ Solution:
function d01(a,b) {
    let arr1 = [a];
    let arr2 = [b];
    return arr1.includes(arr2[0]);
}

console.log(d01(1, 2))