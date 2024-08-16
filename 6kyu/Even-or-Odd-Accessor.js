// ❓ Description:
//     Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.
//
//     For example:
//
//     evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'

// ✅ Solution:
const evenOrOdd = new Proxy(
    function(n) {
        return n % 2 === 0 ? 'Even' : 'Odd';
    },
    {
        get(target, prop) {
            const n = Number(prop);
            if (!isNaN(n) && Number.isInteger(n)) {
                return target(n);
            }
            return undefined;
        }
    }
);
console.log(evenOrOdd(8));