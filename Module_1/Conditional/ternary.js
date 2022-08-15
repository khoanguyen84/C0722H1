// let name = "Châu";
// let gender = false;
// let married = true;
// gender == true ? console.log(`Mr. ${name}`) : console.log(`Ms. ${name}`);

// console.log(`${gender == true ? 'Mr' : married == true ? 'Mrs' : 'Ms'}. ${name}`);

// if(gender == true ){
//     console.log(`Mr. ${name}`);
// }
// else{
//     if(married == true){
//         console.log(`Mrs. ${name}`);
//     }
//     else{
//         console.log(`Ms. ${name}`);
//     }
// }

function rank() {
    let aveScore = Number(document.querySelector('#aveScore').value);
    let rankText = document.getElementById('rank');

    aveScore < 0 || aveScore > 10 ? rankText.value = `${aveScore} không hợp lệ` :
        aveScore >= 9 ? rankText.value = 'Xuất sắc' :
            aveScore >= 8 ? rankText.value = 'Giỏi' :
                aveScore >= 7 ? rankText.value = 'Khá' :
                    aveScore >= 5 ? rankText.value = 'Trung bình' : rankText.value = 'Yếu';
}

