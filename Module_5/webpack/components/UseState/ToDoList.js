import React, { useState, useRef } from "react";

const key = "jobs_data";
let jobs_data = []
if(localStorage.getItem(key) === null){
    jobs_data = ["Java", "React", "Angular"];
    localStorage.setItem(key, JSON.stringify(jobs_data));
}
else{
    jobs_data = JSON.parse(localStorage.getItem(key));
}
function ToDoList() {
    const [jobs, setJobs] = useState(jobs_data);
    const [jobname, setJobname] = useState("");
    const jobnameRef = useRef();

    const handleCreateJob = () => {
        // setJobs([
        //     jobname,
        //     ...jobs
        // ])

        setJobs((pre) => {
            let newData = [
                ...pre,
                jobname
            ]
            localStorage.setItem(key, JSON.stringify(newData));
            return newData;
        })
        setJobname("");
        jobnameRef.current.focus();
    }

    const handleRemoveJob = (currentJobname) => {
        // let newJobs = jobs.filter((job) => job !== currentJobname);
        // setJobs(newJobs);
        let confirm = window.confirm(`Are you want to remove job: ${currentJobname}?`);
        if (confirm) {
            setJobs((pre) => {
                let newJobs = pre.filter((job) => job !== currentJobname);
                return newJobs;
            })
        }
    }
    return (
        <div className="container mt-2">
            <div className="form-group d-flex">
                <input type="text" className="form-control w-25 me-2"
                    value={jobname}
                    name="jobname"
                    ref={jobnameRef}
                    onInput={(e) => setJobname(e.target.value)} />
                <button className="btn btn-danger"
                    onClick={handleCreateJob}
                >Create</button>
            </div>
            <div className="w-25 mt-2">
                <ul className="list-group">
                    {
                        jobs.map((job) => (
                            <li key={job} className="list-group-item d-flex justify-content-between bg-secondary text-white">{job}
                                <span role="button" className="text-white fw-bolder"
                                    onClick={() => handleRemoveJob(job)}
                                >&times;</span></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;