// ❓ DESCRIPTION:
//     Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
//     friend {"Ryan", "Kieran", "Mark"} `shouldBe` {"Ryan", "Mark"}
// If there are no friends return {""}.
//
//     Note: keep the original order of the names in the output.

// ✅ SOLUTION:
function friend(friends){
    let friendsOfMe = [];
    for(let element of friends){
        if(element.length === 4){
            friendsOfMe.push(element);
        }
    }
    return friendsOfMe.length ? friendsOfMe : [];
}

console.log(friend(['Misha', 'Masha', 'Dasha', 'Eva', 'Vlad', 'Mark']));