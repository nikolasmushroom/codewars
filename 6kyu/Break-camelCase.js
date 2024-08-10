// ❓ Description:
//     Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ✅ Solution:
function solution(string) {
    let res = [];
    let arr = string.split('');
    arr.forEach((elem) => {
        if(elem === elem.toUpperCase()){
            res.push(' ' + elem);
        }else{
            res.push(elem);
        }
    })
    return res.join('');
}

console.log(solution('helloWorld'))