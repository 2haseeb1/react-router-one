import React, { useState } from "react"

import Image from './images/banner.png'
import { Link } from "react-router-dom";



const Banner = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-4 sm:px-20 py-8">
        <div className="text-center sm:text-left w-full sm:w-1/2">
          <p className='text-4xl sm:text-7xl leading-relaxed sm:leading-none mb-8'>Be Hired <br />Closer To Your <span className='text-[#8983fe]'>Dream Job</span></p>
          <p className='text-lg sm:text-xl mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <Link to="/jobs"><button className='btn'>Get Started</button></Link>
        </div>
        <div className="w-[100%] ">
          <img src={Image} alt="Dream Job Banner" className='w-full sm:w-full sm:h-auto object-contain' />
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Navbar = () => {
    
    const[isMobileMenuOpen, setIsMobileMenuOpen]=useState(false)
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white font-bold text-xl">Your Brand</div>
         
        </div>
      
         
                <div className="flex items-center space-x-4">
                <Link to="/statistics" className="text-white hidden md:flex">Statistics</Link>
          <Link to="/applied-jobs" className="text-white hidden md:flex">Applied Jobs</Link>
                <Link to="/blog" className="text-white hidden md:flex">Blog</Link>
                </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Start Apply</button>
        
        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 p-4 space-y-2">
            <Link to="/statistics" className="text-white">Statistics</Link>
            <Link to="/applied-jobs" className="text-white">Applied Jobs</Link>
            <Link to="/blog" className="text-white">Blog</Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Start Apply</button>
          </div>
        )}
      </nav>
    );
  };
  

export {Navbar}