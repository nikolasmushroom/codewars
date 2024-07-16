// ❓ DESCRIPTION:
//     Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
//
//     For example:
//
//     * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

// ✅ SOLUTION:
function smaller(nums) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        let counter = 0;
        for(let x = i; x < nums.length; x++){
            if(nums[i] !== nums[nums.length - 1] && nums[i] > nums[x+1]){
                counter++;
                console.log(counter);
            }else{
                console.log(false);
            }
        }
        res.push(counter);
    }
    return res;
}

console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]))