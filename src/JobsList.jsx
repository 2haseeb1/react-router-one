import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jobsDataLoader from "./loader/jobsDataLoader";

function JobsList() {

  const [jobs, setJobs] = useState([]);

  
  useEffect(() => {
    async function fetchJobs() {
      const data = await jobsDataLoader();
      setJobs(data);
    }
    fetchJobs();
  }, []);


  return (
    <div className="jobs-list">
      {jobs.map((job) => (
        <div className="border border-solid border-gray-800 rounded-md p-3 w-[230px]" key={job.id}>
          <img src={job.companylogo} alt={job.companybrandname} />
          <h3>{job.profession}</h3>
          <p>
            {job.jobtype} | {job.joblocation}
          </p>
          <h4>{job.companybrandname}</h4>
          <p>{job.salaryrange}</p>
        
          <Link
            to={`/job/${job.id}`}
            state={job}
            className="view-details-button"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default JobsList;
