import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import jobsDataLoader from "./loader/jobsDataLoader";
import Home from "./Home";
import JobDetails from "./Ai component/JobDetails";
import StoredData from "./Ai component/StoredData";
import JobsList from "./Ai component/JobList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
/*   {
    // Update the path to include the job ID as a parameter
    path: "job/:id",
    element: <JobDetails />,
    loader: jobsDataLoader,
  }, */
  {
    path: "applied-jobs",
    element: <StoredData />,
  },
 
  {
    path: "details/:id",
    element:<JobDetails/> ,
  },
  {
    path: "stored-data",
    element:<StoredData/> ,
  },
  {
    path: "/stored-data/:id",
    element:<JobDetails/> ,
  },
 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
