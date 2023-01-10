// 1. phải là 1 function
// 2. nó phải được truyền vào 1 function khác, thông qua đối số
// 3. phải được thực thi

function callback(n1, n2) {
    return n1 + n2;
}

// function callback_2(n1, n2){
//     return n1 * n2;
// }
function useCallback(params) {
    console.log(params(5, 10));
}

// function useCallback_2(){
//     console.log(callback(5, 10));
// }
// useCallback_2();

useCallback(callback);

useCallback(function (n1, n2) {
    return n1 - n2;
});

let numbers = [1, 4, 5, 66, 5]

// function callbackFn(total, value) {
//     return total + value;
// }
// let result = numbers.reduce(function (total, value) {
//     return total + value;
// })

// console.log(result);