// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//         }, 2000)
//     }, 1000)
// }, 3000);

// callback hell


const promise = new Promise(
    function executor(resolve, reject) {
        // logic 
        let number = 5;
        if (number >= 5) {
            return resolve(1);
        }
        // return resolve({
        //     message: "Ok",
        //     code: 200
        // });

        return reject({
            message: "Internal server",
            code: 500
        });
    }
)

// promise chain
promise
    .then(function (data) {
        // console.log(data.message);
        console.log(data);
        return ++data;
    })
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function (error) {
        console.log(error.code);
    })
    .finally(function () {
        console.log("done");
    })

