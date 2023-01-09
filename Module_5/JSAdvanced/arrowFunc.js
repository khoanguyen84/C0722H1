// 1. declaration fucntion
// sum(10, 20)

function sum(n1, n2) {
    console.log(n1 + n2);
}
// 2. expression function
// const times = function (n1, n2) {
//     console.log(n1 * n2);
// }
// const times = (n1, n2) => console.log(n1 * n2);
// times(4, 6)

// const hello = function(name){
//     console.log(`Hello, ${name}`);
// }
// const hello = (name) => console.log(`Hello, ${name}`);

// hello("Hoan")

// const slogen = function(){
//     console.log("1 + 1 = 2");
// }
const slogen = () => console.log("1 + 1 = 2");
slogen();
// 3. anonymous/callback function
let numbers = [1, 3, 4, 5, 5];
// let result = numbers.reduce(function (total, number) {
//     return total + number;
// })
let result = numbers.reduce((total, number) => total + number);

// console.log(process(10, 20));
// console.log(result);

// 4. define class
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     // 5. define methods
//     this.greeting = function () {
//         console.log(`${this.name}, ${this.age}`);
//     }
// }

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greeting() {
        console.log(`${this.name}, ${this.age}`);
    }
}

let duy = new Student("Duy", 18);
duy.greeting();

// prameter: tham số
// agrument: đối số