// ❓ DESCRIPTION:
//     Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
//
//     If n == 0 return an empty sequence []
//
// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// ✅ SOLUTION:
function first(arr, n) {
    if(n === undefined){
        return [arr[0]];
    }else if(n === 0){
        return [];
    }
    return arr.slice(0, n);
}

console.log(first([1, 2, 3, 4], 3));