// ❓ DESCRIPTION:
//  Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// ✅ SOLUTION:
function reverse(str){
    let arr = str.split(' ');
    let index = 0;
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ''){
            index++;
        }
        if(index === arr.length){
            return '';
        }
        if((i + 1) % 2 === 0){
            res.push(arr[i].split('').reverse().join(''));
        }else{
            res.push(arr[i]);
        }
    }
    return res.join(' ');
}

console.log(reverse('Hello, my name is Mikalai!'))