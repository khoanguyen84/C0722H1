let students = [
    "Cường",
    "Dũng",
    "Duy",
    "Lợi",
    "Luyn",
    "Hoan",
    "Hiếu"
]

let tbStudents = document.querySelector('#tbStudent');
for (let s = 0; s < students.length; s++) {
    tbStudents.innerHTML += `
                            <tr>
                                <td>${s + 1}</td>
                                <td>${students[s]}</td>
                                <td>
                                    <button onclick="remove('${students[s]}')">Xóa</button>
                                </td>
                            </tr>`
}

function remove(name) {
    let index = students.findIndex(function (student) {
        return student == name;
    })
    if (index != -1) {
        students.splice(index, 1);
        let tbStudents =  document.getElementById('tbStudent'); //document.querySelector('#tbStudent');
        tbStudents.innerHTML = "";
        for (let s = 0; s < students.length; s++) {
            tbStudents.innerHTML += `
                            <tr>
                                <td>${s + 1}</td>
                                <td>${students[s]}</td>
                                <td>
                                    <button onclick="remove('${students[s]}')">Xóa</button>
                                </td>
                            </tr>`
        }

    }
}