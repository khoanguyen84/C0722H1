// let month = 'Jul';
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12: {
//         console.log(`${month}: 31 days`);
//         break;
//     }
//     case 2: {
//         console.log(`${month}: 28 or 2 days`);
//         break;
//     }
//     case 4:
//     case 6:
//     case 9:
//     case 11: {
//         console.log(`${month}: 30 days`);
//         break;
//     }
//     default: {
//         console.log(`${month} is invalid`);
//     }
// }

function rank(){
    let aveScore = Number(document.getElementById('aveScore').value);
    switch (true) {
        case aveScore >= 9 && aveScore <= 10: {
            document.getElementById('rank').value = "Xuất sắc";
            break;
        }
        case aveScore >= 8 && aveScore < 9: {
            document.getElementById('rank').value = "Giỏi";
            break;
        }
        case aveScore >= 7 && aveScore < 8: {
            document.getElementById('rank').value = "Khá";
            break;
        }
        case aveScore >= 5 && aveScore < 7: {
            document.getElementById('rank').value = "Trung bình";
            break;
        }
        case aveScore >= 0 && aveScore < 5: {
            document.getElementById('rank').value = "Yếu";
            break;
        }
        default: {
            document.getElementById('rank').value = "điểm không hợp lệ";
            break;
        }
    }
}
