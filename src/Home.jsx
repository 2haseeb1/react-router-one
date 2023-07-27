import React from 'react'
/* import JobsList from './JobsList' */
import JobsList from './Ai component/JobList'
import Banner from './Banner'
import JobsCategory from './JobsCategory'
/* import { Studends } from './Students'
import Banner from './Banner' */



const Home = () => {
  return (
    <div>
    
      <Banner />
      <JobsCategory/> 
      <JobsList />
      
    </div>
  )
}

export default Home
