import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/jobs.json'
const JobsList = () => {
  const [jobData, setJobData] = useState([]);

  /* useEffect(() => {
    fetch('jobs.json')
      .then((response) => response.json())
      .then((data) => setJobData(data));
  }, []); */

  return (
    <div>
      {data.map((job) => (
        <div key={job.id}>
          <h2>{job.profession}</h2>
          <p>{job.jobtype}</p>
          <p>{job.joblocation}</p>
          <p>{job.companybrandname}</p>
          <p>{ job.id}</p>
          <p>{job.location}</p>
          <p>{job.salaryrange}</p>
          <Link to={`/details/${job.id}`} className='bg-gray-700 text-white py-1 px-3 rounded-md '>
            <button>View Details</button>
          </Link> 
        </div>
      ))}
    </div>
  );
};

export default JobsList;