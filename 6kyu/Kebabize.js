// ❓ DESCRIPTION:
//     Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
//     the returned string should only contain lowercase letters

// ✅ SOLUTION:
function kebabize(str) {
    let res = str.split('').map((elem, index) => {
        if(elem !== elem.toLowerCase()){
            if(index !== 0 || index !== 0){
                return '-' + elem.toLowerCase();
            }else{
                return elem.toLowerCase();
            }
        }else {
            return elem.toLowerCase().replace(/[0-9]/g, '');
        }
    })
    return res.join('');
}
console.log(kebabize('MyCamel23CasedString'));