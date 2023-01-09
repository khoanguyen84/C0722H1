// áp dụng cho 2 trường hợp
// 1. Khai báo biến bằng từ khóa var
// 2. Function Declaration

// scope (phạm vi)
// 1. global (toàn cục)
// 2. local (cục bộ)
// 3. block code

// let jobs = ["java", "react", "angular"]
// // var i;
// for(let i = 0; i < jobs.length; i++ ){
//     console.log(jobs[i]);
// }

// console.log(`i outside for: ${i}`);

// var name;
// {
//     console.log(name);
//     {
//         let name = "Khoa"
//         console.log(name);
//         {
//             {
//                 var name = "Luyn"
//             }
//         }
//         console.log(name);
//     }
// }

{
    {
        let age = 18;
        {
            {
                let age = 20;
                console.log(age);
            }
            console.log(age);
        }
    }
}