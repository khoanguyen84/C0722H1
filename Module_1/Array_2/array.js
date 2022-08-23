let numbers = [1, 2, 3, 4, 5];
// for
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// for..in
// for(let index in numbers){
//     console.log(numbers[index]);
// }
// for..of
// for(let number of numbers){
//     console.log(number)
// }

// let str = "";
// for( let number of numbers){
//     str += `${number};`;
// }
// console.log(str)

// console.log(numbers.toString());
// console.log(numbers.join(""))

// push(): thêm 1 hoặc nhiều giá trị vào cuối mảng
// numbers.push(10,11,12);
// console.log(numbers)

// pop(): xóa 1 giá trị cuối mảng
// numbers.pop();
// console.log(numbers)

// unshift(): thêm 1 hoặc nhiều giá trị vào đầu mảng
// numbers.unshift(10,11,12);
// console.log(numbers)

// shift(): xóa 1 giá trị ở đầu mảng
// numbers.shift();
// console.log(numbers)

// splice()
// 1. thêm 1 hoặc nhiều giá trị vào mảng
// numbers.splice(2, 0, 10, 10, 10)
// console.log(numbers)
// 2. xóa 1 hoặc nhiều giá trị trong mảng
// numbers.splice(0,3)
// console.log(numbers)

// delete()
// delete numbers[0];
// console.log(numbers.length)

// concat(): gộp 1 hoặc nhiều mảng/giá trị vào 1 mảng khác và trả về mảng mới
// let chars = ["A", "B", "C"];
// let result = numbers.concat(chars);
// let result = chars.concat(numbers, "Khoa", [true, false, true, false]);
// console.log(numbers)
// console.log(chars)
// console.log(result)

// slice(): lấy 1 mảng con từ mảng cha và trả về mảng con
let sub_numbers = numbers.slice(1, 4);
console.log(sub_numbers)