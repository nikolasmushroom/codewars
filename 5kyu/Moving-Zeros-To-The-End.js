// ❓ DESCRIPTION:
//     Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ✅ SOLUTION:
function moveZeros(arr) {
    let filteredArr = arr.filter((elem) => elem !== 0);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(moveZeros([false, 1, 2, 3, 0, 2, 0, 11, 0, NaN]));
