// ❓ Description:
//     In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
//     For example:
//
//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//
//     dup(["kelless","keenness"]) = ["keles","kenes"].
//
//         Strings will be lowercase only, no spaces. See test cases for more examples.
//
//     Good luck!

// ✅ Solution:
function dup(s) {
    let res = [];
    for(let element of s){
        let newStr = '';
        for(let i = 0; i < element.length; i++){
            if(element[i] !== element[i+1]){
                newStr += element[i];
            }
        }
        res.push(newStr);
    }
    return res;
}
console.log(dup(["kelless","voorraaddoosspullen","achcha"]));