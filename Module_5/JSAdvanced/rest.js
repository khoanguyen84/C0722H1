// function sum() {
//     // console.log(arguments);
//     let total = 0 ;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     console.log(total);
// }

// function sum(message, ...rest) {
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total += rest[i];
//     }
//     console.log(`${message}: ${total}`);
// }
// sum(100, 2, 4, 5, 67, 7, 8, 9, 9, 0, 4, 15)

function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
}

let numbers = [4, 6, 7, 4, 3, 23, 4, 5, 67, 2]

console.log(sum(...numbers));