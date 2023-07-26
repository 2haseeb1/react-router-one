import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUserCog, faMobileAlt, faCalculator } from '@fortawesome/free-solid-svg-icons';

const JobsCategory = () => {
    return (
      <div>
        <h3 className='text-[48px] text-center mt-5 font-bold'>Jobs Category List</h3>
       
        
        <div className="flex flex-wrap justify-around gap-4 p-4 w-[90%] mx-auto">
          <div className="card ">
          <div className='icon-outside'>
            <FontAwesomeIcon icon={faUserCog} className='icon-inside' />
            </div>
            <h2 className="text-xl font-bold text-center mt-[32px]">Software Engineer</h2>
            <p className='ml-[-35px]'>130+ jobs availabe</p>
            
           
          </div>
  
          <div className="card ">
            
            <div className='icon-outside'>
            <FontAwesomeIcon icon={faLaptopCode} className='icon-inside' />
            </div>
            <h2 className="text-xl font-bold text-center mt-[32px]">IT Specialist</h2>
            <p>30 jobs availabe</p>
          
          </div>
  
          <div className="card ">
           
            <div className='icon-outside'>
            <FontAwesomeIcon icon={faMobileAlt} className='icon-inside' />
            </div>
            <h2 className="text-xl font-bold text-center mt-[32px]">Mobile App Designer</h2>
            <p>100+ jobs availabe</p>
            
          </div>
  
          <div className="card  ">
            <div className='icon-outside'>
              <FontAwesomeIcon icon={faCalculator} className='icon-inside' />
              </div>
            <h2 className="text-xl font-bold text-center mt-[32px]">Accounting Manager</h2>
            <p>300 jobs availabe</p>
           
          </div>
        </div>
  
        <style jsx>{`
          .card {
            width: 311px;
            height: 243px;
            background-color: #FAF8FF;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius:8px;
          }

          svg {
            margin-top: 32px;
            margin-right: 50px;
           
          }
        `}</style>
      </div>
    )
  }
  
  export default JobsCategory

  
  
