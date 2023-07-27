import React, { useState, useEffect } from 'react';
import data from '../data/jobs.json';
import { getJobCart } from '../utilities/fakeDb';
import { Link } from 'react-router-dom';

const StoredData = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobCart = getJobCart();
    const jobIds = Object.keys(jobCart);
    if (jobIds.length > 0) {
      const jobData = data.filter(job => jobIds.includes(job.id.toString()));
      if (jobData.length > 0) setJobs(jobData);
    }
  }, []);

  if (jobs.length === 0) return <h2>No job data found.</h2>;

  return (
    <div>
      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.profession} at {job.companybrandname}</h2>
          <p>Type: {job.jobtype}</p>
          <p>Location: {job.location}</p>
              <p>Salary range: {job.salaryrange}</p>
              <Link to={`/stored-data/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default StoredData;
