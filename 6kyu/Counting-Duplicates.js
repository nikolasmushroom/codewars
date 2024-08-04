// ❓ DESCRIPTION:
//     Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// ✅ SOLUTION:
function duplicateCount(text){
    let obj = {};
    let res = 0;
    text.toUpperCase().split('').forEach((elem) => {
        if(!obj[elem]){
            obj[elem] = 1;
        }else{
            obj[elem]++;
        }
    })
    for(let key in obj){
        if(obj[key] > 1){
            res++;
        }
    }
    return res;
}
console.log(duplicateCount("IndivIsibilities"));