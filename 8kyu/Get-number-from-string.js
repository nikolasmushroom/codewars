// ❓ DESCRIPTION:
//     Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
//
// Function:
//
//     getNumberFromString(s)

// ✅ SOLUTION:
function getNumberFromString(s) {
    let res = s.split('').filter((elem) => !isNaN(parseInt(elem)));
    return parseInt(res.join(''));
}

console.log(getNumberFromString('1pastaspesto8790'));