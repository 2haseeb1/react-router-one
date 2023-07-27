import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

function StoredData() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
   
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        // data is an array of job objects
        const shoppingCart = getJobCart();
        const dataWithQuantity = data.map((job) => ({
          ...job,
          quantity: shoppingCart[job.id] || 0,
        }));
        setStoredData(dataWithQuantity);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getJobCart = () => {
    
    let jobCart = {};
    const storedCart = localStorage.getItem("job-cart");
    if (storedCart) {
      jobCart = JSON.parse(storedCart);
    }
    return jobCart;
  };

  const filteredData = storedData.filter((item) => item.quantity > 0);

  return (
    <div className="stored-data">
     <Nav/>
      <div>
        text
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            Job ID: {item.id}, Quantity: {item.quantity}
            <p>Profession: {item.profession}</p>
            
            <Link to={`/item/${item.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoredData;
