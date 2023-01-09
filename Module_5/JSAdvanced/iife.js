// IIFE = Immediately Invoked Function Expression


// function sum(n1, n2){
//     console.log(n1 + n2);
// }

// sum(20, 30)

let number = 5

;(function (n1, n2){
    console.log(n1 + n2);
})(20, 30)

// ((n1, n2) => console.log(n1 + n2))(20, 30)
