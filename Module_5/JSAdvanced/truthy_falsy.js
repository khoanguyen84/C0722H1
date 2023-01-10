// convert các kiểu dữ liệu khác về kiểu dữ liệu boolean
// 0 -> false
// null -> false
// empty -> false
// NaN -> false
// undefined -> false

// let number = 0;
// if(number) {
//     console.log('Geater than zero');
// }

let fullname = undefined;

// if(fullname){
//     console.log(fullname);
// }else{
//     console.log("No name");
// }

console.log(fullname || "no name");