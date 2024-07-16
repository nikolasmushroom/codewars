// ❓ DESCRIPTION:
//     Given a string, remove any characters that are unique from the string.
//
//     Example:
//
// input: "abccdefee"
//
// output: "cceee"

// ✅ SOLUTIONS:
function onlyDuplicates(str) {
    return str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('');
}

console.log(onlyDuplicates('colloquial'))