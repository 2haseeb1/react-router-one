import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    
    const[isMobileMenuOpen, setIsMobileMenuOpen]=useState(false)
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="bg-[#F9F9FF] h-[108px] flex items-center justify-between w-[100%] mx-auto">
      
        <div className="flex items-center space-x-4   ">
          <div className="text-[#656565] font-bold text-xl ml-[100px]">CrazyJobs</div>
          <div>
            text
         </div>
        </div>
      
         
                <div className="flex items-center space-x-4">
                <Link to="/" className="text-[#757575] hidden md:flex">Home</Link>
                <Link to="/statistics" className="text-[#8B80FF] hidden md:flex">Statistics</Link>
          <Link to="/applied-jobs" className="text-[#757575] hidden md:flex">Applied Jobs</Link>
                <Link to="/blog" className="text-[#757575] hidden md:flex">Blog</Link>
                </div>
          <button className="bg-[#8D7FFF] text-white px-4 py-2 rounded mr-[100px]">Start Apply</button>
          
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
            <button className=" bg-[#8D7FFF] text-white px-4 py-2 rounded mr-[100px]">Start Apply</button>
            
          </div>
         
          )}
         
      </nav>
     
    );
};
  export default Nav
  
