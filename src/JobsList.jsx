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
    <div className="jobs-list grid grid-cols-2 gap-3 mt-5 w-[100%]text-center mx-[12%]">
      {jobs.map((job) => (
        <div className="border border-solid border-gray-800 rounded-md p-3 w-[500px] h-[392px] mr-5 mx-auto mb-[40px]" key={job.id}>
          <img src={job.companylogo} alt={job.companybrandname} />
          <h3 className="text-[24px] font-bold mt-3">{job.profession}</h3>
          <h4 className="text-[20px]">{job.companybrandname}</h4>
          <p  className="text-[20px]"> 
            {job.jobtype} | {job.joblocation}
          </p>
          
          <p className="text-[20px]">{job.salaryrange}</p>
        
          <Link
            to={`/job/${job.id}`}
            state={job}
            className="button bg-[#7E90FE] text-white py-3 w-[30%] rounded-sm  block mt-5"
          >
           
            <span className="ml-3"> View Details</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default JobsList;
