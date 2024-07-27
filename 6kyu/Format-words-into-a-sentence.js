// ❓ DESCRIPTION:
//     Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.
//
//     Note:
//
// Empty string values should be ignored.
//     Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
//     Example: (Input --> output)
//
//     ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
//     ['ninja', '', 'ronin'] --> "ninja and ronin"
//     [] -->""

// ✅ SOLUTION:
function formatWords(words){
    if(words === null || words.length === 0){
        return '';
    }else if(words.length === 1){
        if(words[0] === ''){
            return '';
        }
    }

    let arr = [];
    for(let element of words){
        if(element !== ''){
            arr.push(element);
        }
    }

    if(arr.length === 1){
        return String(arr);
    }
    if(arr.length === 2){
        return arr.join(' and ');
    }
    return arr.splice(0, arr.length - 1).join(', ') + ' ' + 'and' + ' ' + String(arr[arr.length - 1]);
}

console.log(formatWords(['one', 'two', 'three']));