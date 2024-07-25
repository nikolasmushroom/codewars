// ❓ DESCRIPTION:
//     Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:
//
//     [a,a,a,a,b,b] and [c,c,c,d,c,d]
// Both arrays have four of one item and two of another, so balance should return true.
//
//     #Have fun!

// ✅ SOLUTION:
function balance (arr1, arr2) {
    let arr1obj = {};
    let arr2obj = {};
    let res1 = [];
    let res2 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr1obj[arr1[i]]) {
            arr1obj[arr1[i]] = 1;
        } else {
            arr1obj[arr1[i]]++;
        }
    }
    for (let x = 0; x < arr2.length; x++) {
        if (!arr2obj[arr2[x]]) {
            arr2obj[arr2[x]] = 1;
        } else {
            arr2obj[arr2[x]]++;
        }
    }
    for(let key in arr1obj){
        res1.push(arr1obj[key]);
    }
    for(let key in arr2obj){
        res2.push(arr2obj[key]);
    }
    res1.sort((a, b) => a - b);
    res2.sort((a, b) => a - b);

    if (res1.length !== res2.length) {
        return false;
    }
    for (let i = 0; i < res1.length; i++) {
        if (res1[i] !== res2[i]) {
            return false;
        }
    }
    return true;
}

console.log(balance(["a","a","a","a","a","b","b","b"],
    ["c","c","c","c","c","d","d","d"],))