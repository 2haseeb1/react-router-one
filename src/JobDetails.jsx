import React from "react";
import { useLocation } from "react-router-dom";
import { addToDb } from "./utilities/fakeDb";

function JobDetails() {
  const location = useLocation();
    const job = location.state;
    
    const handleApply = () => {
        
    
       
        addToDb(job.id)
      };

  if (!job) {
    // Handle the case when job data is not available (optional)
    return <div>Job details not available.</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.profession}</h2>
      <h3>{job.companybrandname}</h3>
      <p>
        {job.jobtype} | {job.joblocation}
      </p>
      <p>{job.salaryrange}</p>
      <p>{job.description}</p>
          {/* Additional details for the specific job can be displayed here */}
          <button onClick={handleApply} className="apply-button">
        Apply
      </button>
    </div>
  );
}

export default JobDetails;
