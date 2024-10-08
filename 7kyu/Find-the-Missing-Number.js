// ❓  Dexcription
// This question is a variation on the Arithmetic Progression kata
//
// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:
//
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

// Solution
function missingNo(nums) {
    let sortedArr = nums.sort((a, b) => a-b);
    for(let i = 0; i < sortedArr.length; i++){
        if((sortedArr[i]+1)!==sortedArr[i+1]){
            return sortedArr[i]+1;
        }
    }
}

console.log(missingNo([1, 2, 3, 4, 5, 7]))