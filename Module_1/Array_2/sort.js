// sort()
// 1. sort theo alphabel
let numbers = [2, 1, 11, 4, 3, 21];
// numbers.sort();
// console.log(numbers);
// 2. sort theo numbers
function compare(n1, n2){
    return n1 - n2;
}

numbers.sort(compare);

console.log(numbers.reverse())