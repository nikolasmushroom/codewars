// ❓ Description:
//     Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
//
//     Note: the scores will always be unique (so no duplicate values)
//
// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// ✅ Solution;
function myLanguages(results) {
    let res = [];
    let sortObj = [];
    for(let key in results){
        sortObj.push([key, results[key]]);
    }
    sortObj.sort((a,b) => {
        return b[1] - a[1];
    })
    let obj = Object.fromEntries(sortObj);
    for(let elem in obj){
        if(obj[elem] >= 60){
            res.push(elem);
        }
    }
    return res;
}

console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}))