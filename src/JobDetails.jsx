import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Paste the contents of fakeDb.js below this comment

// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getJobCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getJobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }
}

const getJobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteJobCart = () => {
    localStorage.removeItem('job-cart');
}

// End of the contents from fakeDb.js

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("/jobs.json") // Adjust the path to the jobs.json file if needed
    .then((response) => response.json())
    .then((data) => {
      const selectedJob = data.find((job) => job.id === parseInt(id));
      setJob(selectedJob);
    });
}, [id]);
 

  const handleApplyClick = () => {
    addToDb(id); // Call the addToDb function with the job ID to add the job to the cart (localStorage)
    alert("Job added to cart!");
  };

  if (!job) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{ job.id}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </div>
  );
};


export default JobDetails;