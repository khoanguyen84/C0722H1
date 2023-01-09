// pass by value: tham trị. Các kiểu dữ liệu: Number, string, boolean
// pass by reference: tham chiếu. Các kiểu dữ liệu: array, object, function

// let jobs_1 = ["java", "dot net", 'react'];
// let jobs_2 = ["java", "php", 'react'];

// let jobs_2 = jobs_1;
// jobs_2[1] = "php";

// let jobs_2 = [...jobs_1]
// jobs_2[1] = "php";

// console.log(jobs_1);
// console.log(jobs_2);


let luyn = {
    name: "Luyn",
    gender: true,
    age: 18
}

// let loc = { ...luyn };
// loc.name = "Lộc";

let loc = {
    ...luyn,
    name: "Lộc",
    email: "luna-dao@gmail.com"
}
console.log(luyn);
console.log(loc);