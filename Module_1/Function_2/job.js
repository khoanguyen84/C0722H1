const jobs = ["Lau nhà", "Rửa chén", "Nấu cơm", "Đón con", "Gặt áo quần"];

function renderJobs() {
    let htmls = jobs.map(function (job, index) {
        return `
                <tr id="tr_${index}">
                    <td>${index + 1}</td>
                    <td>${job}</td>
                    <td>
                        <button class="btn btn-warning" onclick='editJob(${index})'>Edit</button>
                        <button class="btn btn-primary d-none" onclick='saveJob(${index})'>Save</button>
                        <button class="btn btn-danger" onclick="makeDone(${index})">Done</button>
                    </td>
                </tr>
                `;
    });
    document.querySelector('.table>tbody').innerHTML = htmls.join("");
}

function addJob() {
    let job = document.querySelector('.form-control').value;
    if (job.trim() == "" || job == null) {
        alert("Please input job name!");
        return;
    }
    jobs.push(job);
    renderJobs();
    document.querySelector('.form-control').value = "";
}

function editJob(index){
    document.querySelector(`#tr_${index}>td:nth-child(2)`).innerHTML = `<input class="form-control" type='text' value='${jobs[index]}' />`
    document.querySelector(`#tr_${index} .btn-warning`).classList.toggle('d-none');
    document.querySelector(`#tr_${index} .btn-primary`).classList.toggle('d-none');
}


function saveJob(index){
    let newJobname = document.querySelector(`#tr_${index}>td:nth-child(2)>input`).value;
    if(newJobname.trim() == '' || newJobname == null){
        alert('Please input new jobname!');
        return;
    }
    document.querySelector(`#tr_${index} .btn-warning`).classList.toggle('d-none');
    document.querySelector(`#tr_${index} .btn-primary`).classList.toggle('d-none');
    jobs[index] = newJobname;
    document.querySelector(`#tr_${index}>td:nth-child(2)`).innerText = jobs[index];
}

function makeDone(index){
    document.querySelector(`#tr_${index}>td:nth-child(2)`).classList.toggle('done');
    document.querySelector(`#tr_${index} .btn-danger`).classList.toggle('d-none');
    document.querySelector(`#tr_${index} .btn-warning`).classList.toggle('d-none');
}

function ascending(){
    jobs.sort();
    renderJobs();
}

function descending(){
    jobs.reverse();
    renderJobs();
}

renderJobs();