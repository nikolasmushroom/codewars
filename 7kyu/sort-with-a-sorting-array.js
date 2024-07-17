// ❓ DESCRIPTION:
//     Sort an array according to the indices in another array.
//     It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.
//
// sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
//
// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

// ✅ SOLUTION:
function sort(initialArray, sortingArray) {
    let res = [];
    for(let i = 0; i < initialArray.length; i++){
        res[sortingArray[i]] = initialArray[i];
    }
    return res;
}

console.log(sort([1, 2, 3, 4, 5], [0, 1, 2, 3 , 4]));