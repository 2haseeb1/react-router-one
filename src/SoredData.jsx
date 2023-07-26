import React, { useEffect, useState } from "react";

function StoredData() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Fetch data from jobs.json (assuming it's in the public folder)
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        // data is an array of job objects
        const shoppingCart = getShoppingCart();
        const dataWithQuantity = data.map((job) => ({
          ...job,
          quantity: shoppingCart[job.id] || 0,
        }));
        setStoredData(dataWithQuantity);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getShoppingCart = () => {
    // Replace this with your implementation of getShoppingCart function from fakeDb.js
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
  };

  const filteredData = storedData.filter((item) => item.quantity > 0);

  return (
    <div className="stored-data">
      <h2>Stored Data from jobs.json:</h2>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            Job ID: {item.id}, Quantity: {item.quantity}
            <p>Profession: {item.profession}</p>
            {/* Display other job details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoredData;
