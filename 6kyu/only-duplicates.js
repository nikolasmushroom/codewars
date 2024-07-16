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
    let res = [];
    let arr = str.split('')
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        for(let x = i; x < arr.length; x++){
            if(arr[x + 1] === arr[i] && index === 0){
                res.push(arr[i])
                res.push(arr[x + 1])
                index++;
            }else if(arr[x + 1] === arr[i] && index !== 0){
                res.push(arr[x + 1])
                index++;
            }
        }
    }
    for(let y = 0; y < arr.length; y++){
        if(!res.includes(arr[y])){
            arr.splice(arr.indexOf(arr[y]), 1);
            y--;
        }
    }
    return arr.join('');
}

console.log(onlyDuplicates('colloquial'))