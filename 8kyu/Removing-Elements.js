// ❓ DESRIPTION:
//     Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//     Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!

// ✅ SOLUTION:
function multipleOfIndex(array) {
    return array.filter((element, index) => element % index === 0 || element === 0);
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

function removeEveryOther(arr){
    let res = arr.filter((elem, index) => index % 2 === 0);
    return res;
}
console.log(removeEveryOther(['Keep', 'Filter', 'Keep', 'Filter']));