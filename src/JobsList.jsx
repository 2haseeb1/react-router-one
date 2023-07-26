import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jobsDataLoader from "./loader/jobsDataLoader";
import locationImg from './icons/Location Icon.png'
import salaryImg from './icons/dollar.png'
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
    <div className="jobs-list grid md:grid-cols-2 gap-[90px] mt-5 w-[100%]text-center mx-[5%]">
      {jobs.map((job) => (
        <div className="border border-solid border-gray-800 rounded-md p-3 w-[640px] h-[392px] mr-5 mx-auto mb-[40px]mr-[90px]" key={job.id}>
          <img src={job.companylogo} alt={job.companybrandname} />
          <h3 className="text-[24px] font-bold mt-3">{job.profession}</h3>
          <h4 className="text-[20px]">{job.companybrandname}</h4>
          <p  className="text-[20px]"> 
            {job.jobtype} | {job.joblocation}
          </p>
          
          <p className="text-[20px] flex mt-1"> <span className="block"><img src={locationImg} alt="" className="block" /> </span> {job.location}   <span><img src={ salaryImg} alt="" className="w-[20px] relative top-2 ml-3 mr-1"/></span> Salary:{job.salaryrange}</p>
        
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
