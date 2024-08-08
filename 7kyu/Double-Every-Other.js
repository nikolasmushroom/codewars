// ❓ DESCRIPTION:
// Write a function that doubles every second integer in a list, starting from the left.
//
//     Example:
//
// For input array/list :
//
// [1,2,3,4]
// the function should return :
//
// [1,4,3,8]

// ✅ SOLUTION:
function doubleEveryOther(a) {
    return a.map((elem, index) => {
        if((index+1)%2===0){
            return elem * 2;
        }else{
            return elem;
        }
    })
}
console.log(doubleEveryOther([1, 2, 3, 4]))
