// ❓ Description:
//     Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
//
//     Examples
//     ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
//     ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
//     ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// ✅ Solution:
function checkThreeAndTwo(array) {
    let arr = [];
    let obj={};
    array.forEach((element) => {
        !obj[element] ? obj[element] = 1 : obj[element]++
    })
    for(let key in obj){
        arr.push(obj[key]);
    }
    return arr.includes(2) && arr.includes(3);
}

console.log(checkThreeAndTwo(['a','a','a','d','d','d']));