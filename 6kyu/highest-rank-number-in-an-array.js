// ❓ DESCRIPTION:
//     Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// ✅ SOLUTION:
function highestRank(arr){
    let obj = {};
    let arrOfNumbers = [];
    let max = 0;
    let res  = [];
    for(let i = 0 ; i < arr.length; i++){
        let min = 1;
        if(!obj[arr[i]]){
            obj[arr[i]] = min;
        }else{
            obj[arr[i]]++;
        }
    }
    for(let key in obj) {
        arrOfNumbers.push(obj[key]);
    }
    max = arrOfNumbers[0];
    for(let i = 1; i < arrOfNumbers.length; i++){
        if(arrOfNumbers[i] > max){
            max = arrOfNumbers[i];
        }
    }
    for(let key in obj) {
        if(obj[key] === max){
            res.push(key);
        }
    }
    if(res.length === 1){
        return parseInt(res[0]);
    }else{
        let max = parseInt(res[0]);
        for(let i = 1; i < res.length; i++){
            if(parseInt(res[i]) > max){
                max = parseInt(res[i]);
            }
        }
        return max;
    }
}

console.log(highestRank( [8,13,8,3,18,13,15,26,12,17,2]));