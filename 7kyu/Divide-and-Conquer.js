// ❓ DESCRIPTION:
//     Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
//     Return as a number.

// ✅ SOLUTION:
function divCon(x){
    let strSum = 0;
    let numSum = 0;
    x.forEach((elem) => {
        if(typeof elem === 'number'){
            numSum+=elem;
        }else{
            strSum+=parseInt(elem);
        }
    })
    return numSum-strSum;
}
console.log(divCon([1, 2, '3', 4, '5']));