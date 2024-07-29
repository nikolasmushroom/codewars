// ❓ Description:
//     Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// ✅ SOLUTION:
function nerdify(txt){
    let arr = txt.split('');
    let res = [];
    for(let elem of arr){
        if(elem === 'a' || elem === 'A'){
            res.push('4');
        }else if(elem === 'e' || elem === 'E'){
            res.push('3');
        }else if(elem === 'l'){
            res.push('1');
        }else{
            res.push(elem);
        }
    }
    return res.join('')
}

console.log(nerdify('Hello World!'));