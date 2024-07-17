// ❓ DISRIPTION:
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// ✅ SOLUTION:
function xor(a, b) {
    if (a === false && b === false) {
        return false;
    } else if (a === true && b === false) {
        return true;
    } else if (b === true && a === false) {
        return true;
    } else if (b === true && a === true) {
        return false;
    }
}

console.log(xor(false, false));