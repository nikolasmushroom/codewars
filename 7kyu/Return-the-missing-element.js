// ❓ Description:
//     Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
//
//     Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
//
//     Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
//
//     Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
//     [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

// ✅ Solution:
function getMissingElement(arr){
    if(arr.length === 0){
        return 0;
    }
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] !== arr[i] + 1 && arr[i] !== 9){
            if(arr[i] !== 9){
                return arr[i] + 1;
            }else if(arr[i] === 9){
                return 0;
            }
        }
    }
}

console.log(getMissingElement([1, 2, 3, 4, 5, 7, 8]))