// ❓ Description:
// Sort the given array of strings in alphabetical order, case insensitive. For example:
//
//     ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
//         ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// ✅ Solution:
let sortme = (names) => {
    return names.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()){
            return -1;
        }
        if(a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    })
}
console.log(sortme(["Hello", "there", "I'm", "fine"]));