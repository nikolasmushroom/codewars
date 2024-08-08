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
    let res = [];
    a.forEach((elem, index) => {
        if((index+1)%2===0){
            res.push(elem*2);
        }else{
            res.push(elem);
        }
    })
    return res;
}
console.log(doubleEveryOther([1, 2, 3, 4]))
