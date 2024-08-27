// ❓ DESCRIPTION:
//     JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.
//
// However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.
//
// See some examples:
//
//     var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// You will be required to validate the inputs on the following criteria:
//
//     each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
//     If the inputs are not valid you should throw an Error.
//
//     See some examples:
//
//     var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error

// ✅ SOLUTION:
let searchArray = function (arrayToSearch, query) {
    // проверка на ошибки:
    if (!Array.isArray(query)) {
        throw new Error("query should be an array");
    }else if(query.length !== 2){
        throw new Error("query should be an array");
    }
    if (!Array.isArray(arrayToSearch)) {
        throw new Error("arrayToSearch should be a two-dimensional array");
    }
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (!Array.isArray(arrayToSearch[i])) {
            throw new Error("arrayToSearch should be a two-dimensional array");
        }else if (arrayToSearch[i].length !== 2) {
            throw new Error("sub-array of arrayToSearch should have length 2");
        }
    }
    // решение:
    let res = [];
    for(let i = 0; i < arrayToSearch.length; i++){
        for(let x = 0; x < query.length; x++){
            if(arrayToSearch[i][x] !== query[x]){
                break;
            }else if(arrayToSearch[i][x] === query[x] && x === arrayToSearch[i].length - 1){
                res.push(i);
            }
        }
    }
    return res.length === 0 ? -1 : res[0];
    // if(res.length === 0){
    //     return -1;
    // }else{
    //     return res[0];
    // }
}
console.log(searchArray([[1,2],[3,4],[5,6]], [5,6]));
