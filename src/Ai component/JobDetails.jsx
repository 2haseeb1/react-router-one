import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/jobs.json'; // Change this line
import { addToDb } from '../utilities/fakeDb';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  console.log("data",data)
  useEffect(() => {
    const jobId = Number(id); 
    const jobData = data.find(job => job.id === jobId);
    if (jobData) setJob(jobData);
  }, [id]);

  if (!job) return <h2>Job not found.</h2>;
  const handleClick = () => {
    addToDb(job.id)
  };
  return (
    <div>
      <h2>{job.profession} at {job.companybrandname}</h2>
      <p>Type: {job.jobtype}</p>
      <p>Location: {job.location}</p>
          <p>Salary range: {job.salaryrange}</p>
          <button onClick={handleClick}>Apply Now</button>
    </div>
  );
};

export default JobDetails;