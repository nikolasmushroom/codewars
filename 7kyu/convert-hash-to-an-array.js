// ❓ DESCRIPTION:
//     Convert a hash into an array. Nothing more, Nothing less.
//
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
//
//     [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Good Luck!

// ✅ SOLUTION:
function convertHashToArray(hash){
    let res = [];
    for(let key in hash){
        if(typeof hash[key] !== 'number'){
            res.push([`${key}`, `${hash[key]}`]);
        }else{
            res.push([`${key}`, parseInt(`${hash[key]}`)])
        }
    }
    res.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });

    return res;
}

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));