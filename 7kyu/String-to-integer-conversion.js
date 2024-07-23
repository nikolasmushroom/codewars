// ❓ DESCRIPTION:
//     JavaScript provides a built-in parseInt method.
//
//     It can be used like this:
//
// parseInt("10") returns 10
// parseInt("10 apples") also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.
//
//     You are asked to write a myParseInt method with the following rules:
//
//     It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10

// ✅ SOLUTION:
function myParseInt(str) {
    str = str.trim();
    if(/^\d+$/.test(str)){
        return (parseInt(str));
    }else{
        return NaN;
    }
}

console.log(myParseInt('   10   '));