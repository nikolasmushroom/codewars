// ❓ DESCRIPTION:
//     Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// ✅ SOLUTION:
function isItLetter(character) {
    let checkTheLetter = /^[a-zA-Z]$/;
    if(checkTheLetter.test(character)){
        return true;
    }else{
        return false;
    }
}

console.log(isItLetter('a'));