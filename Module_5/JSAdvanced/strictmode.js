// strict mode : chế dộ nghiêm ngặt
// có 2 vị trí để đặt
// 1. đầu file
// 2. đầu của thân hàm
// 'use strict';

let jobs = ["java", "react", "angular"]
for(i = 0; i < jobs.length; i++ ){
    console.log(jobs[i]);
}

function sum(){
    'use strict';
    a = 5;
    console.log(a);
}

sum()