// ❓ DESCRIPTION:
//     Complete the function that takes a string of English-language text and returns the number of consonants in the string.
//
//     Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// ✅ SOLUTION:
function consonantCount(str) {
    let index = 0;
    let vowels = 'aeiou^&$#_ ';
    for(let i = 0; i < str.length; i++){
        for(let x = 0; x < vowels.length; x++){
            if(str[i] === vowels[x] || str[i] === vowels[x].toUpperCase() || !isNaN(Number(str[i]))){
                break;
            }else if(str[i] !== vowels[x] && x === vowels.length - 1){
                index++;
            }
        }
    }

    return index;
}
console.log(consonantCount('bcdfghjklmnpqrstvwxyz'));