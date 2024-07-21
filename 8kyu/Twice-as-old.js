// ❓ DESCRIPTION:
//     Your function takes two arguments:
//
//     1. current father's age (years)
//     2. current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// ✅ SOLUTION:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let index = 0;
    while(dadYearsOld !== sonYearsOld * 2){
        if(dadYearsOld > sonYearsOld * 2){
            dadYearsOld--;
            index++;
        }else{
            dadYearsOld++;
            index++;
        }
    }
    return index;
}
console.log(twiceAsOld(42,21));