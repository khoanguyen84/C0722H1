// không thể truy cập biến bên trong hàm từ bên ngoài
// trong hàm có thể truy cập được biến bên ngoài

// function count() {
//     var increament = 0;
//     function counter() {
//         return ++increament;
//     }
//     return counter;
// }

// let appCount = count();
// console.log(appCount());
// console.log(appCount());
// console.log(appCount());

// function student(){
//     let name = "";
//     return {
//         getName(){
//             return name;
//         },
//         setName(newName){
//             name = newName
//         }
//     }
// }

// let std = student();
// std.setName("Khoa Nguyễn");
// console.log(std.getName());

// function useState(initState){
//     let value = initState;

//     function setValue(newValue){
//         value = newValue;
//         return [value, setValue];
//     }

//     return [value, setValue];
// }

// const [state, setState] = useState(10)
// let [value, setValue] = setState(state + 10);
// console.log(value);


function studentManager(){
    let students = ["Duy", "Hoan", "Lợi"];
    return {
        addStudent(name){
            students.push(name)
        },
        getStudents(){
            return students.join();
        },
        removeStudent(name){
            // students = students.filter((item) =>  item != name)
            students = students.filter(function(item){
                return item != name
            })
        },
        destroyData(){
            students = [];
        }
    }
}

let studentApp = studentManager();
studentApp.addStudent("Tùng");
// studentApp.destroyData();
studentApp.removeStudent("Hoan")
console.log(studentApp.getStudents());