// ❓ Description:
//     Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//     Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// ✅ SOLUTION:
function reverseWords(str) {
    let arr = str.split(' ');
    let res = [];
    for(let element of arr){
        res.push(element.split('').reverse().join(''));
    }
    return res.join(' ');
}

console.log(reverseWords('123 456'))