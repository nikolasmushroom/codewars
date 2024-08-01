// ❓ DESCRIPTION:
//     Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// ✅ SOLUTION:

function mergeArrays(a, b) {
    let concat = a.concat(b);
    let res = [];
    for(let element of concat){
        if(!res.includes(element)){
            res.push(element);
        }
    }
    return res.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3], [2, 4, 2]));