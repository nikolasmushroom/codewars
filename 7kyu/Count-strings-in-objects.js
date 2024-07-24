// ❓ DESCRIPTION:
//     Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
//
//     strCount({
//         first: "1",
//         second: "2",
//         third: false,
//         fourth: ["anytime",2,3,4],
//         fifth:  null
//     })

// ✅ SOLUTION:

function strCount(obj){
    let index = 0;
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            index++;
        }
        if(typeof obj[key] === 'object'){
            index += strCount(obj[key]);
        }
    }
    return index;
}

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
}))