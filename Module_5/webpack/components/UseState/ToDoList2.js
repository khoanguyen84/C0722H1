import React, { useState } from "react";

const key = "jobs_data";

function ToDoList2() {
    const [jobs, setJobs] = useState(() => {
        let jobs_data = []
        if (localStorage.getItem(key) === null) {
            jobs_data = ["Java", "React", "Angular"];
            localStorage.setItem(key, JSON.stringify(jobs_data));
        }
        else {
            jobs_data = JSON.parse(localStorage.getItem(key));
        }
        return jobs_data;
    });
    const [jobname, setJobname] = useState("");

    const handSubmit = (e) => {
        e.preventDefault();
        setJobs((pre) => {
            let newData = [
                ...pre,
                jobname
            ]
            localStorage.setItem(key, JSON.stringify(newData));
            return newData;
        })
        setJobname("");
    }

    const handleRemoveJob = (currentJobname) => {
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
            <form onSubmit={handSubmit}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control w-25 me-2"
                        value={jobname}
                        name="jobname"
                        onInput={(e) => setJobname(e.target.value)} />
                    <button type="submit" className="btn btn-danger">Create</button>
                </div>
            </form>
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

export default ToDoList2;