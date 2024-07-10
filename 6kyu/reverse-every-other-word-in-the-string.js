// ❓ DESCRIPTION:
//  Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// ✅ SOLUTION:
function reverse(str){
    let newStr = [];
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        if((i + 1) % 2 === 0){
            newStr.push(arr[i].split('').reverse().join(''));
        }else{
            newStr.push(arr[i]);
        }
    }
    return newStr.join(' ');
}

console.log(reverse("Reverse this string, please!"));