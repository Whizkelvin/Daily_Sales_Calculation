import React,{useState} from 'react'
import MtnCalculation from './components/MtnCalculation';
import AirteltigoCalculation from './components/AirteltigoCalculation';

const Calculation = () => {
   
  const [isPrimary, setIsPrimary] = useState(true);

  const toggleButton = (event) => {
    setIsPrimary(!isPrimary);
  };

  const [Primary, setPrimary] = useState(true);

  const handleClick = (event) => {
    setPrimary(!Primary);
  };

 

  return (
    <div className=' text-center flex flex-col justify-center items-center mb-12 scrollbar-hidden bg-gradient-to-t from-green-200 to-blue-200 py-8'>

      <h1 className=' text-3xl font-extrabold text-black-700 mb-5'>DAILY SALES CALCULATOR</h1>

    <button
    onClick={toggleButton}
    className={`py-2 px-4 rounded-md ${
      isPrimary ? 'bg-yellow-400 text-white transition-colors duration-500 ease-in-out' : ' bg-inherit text-black border border-black transition-colors duration-500 ease-in-out '  
    }`}
  >
    {isPrimary ? 'MTN' : 'MTN'}
  </button>
  <button
              onClick={handleClick}
              className={`py-2 px-4 rounded-md my-4  ${
                Primary ? 'bg-gradient-to-r from-red-700 to-blue-700 text-white transition-colors duration-500 ease-in-out' : ' bg-inherit text-black border border-black transition-colors duration-500 ease-in-out '
              }`}
            >
              {Primary ? 'AIRTELTIGO' : 'AIRTELTIGO'} 
         </button> 

  
        
              {/* toggle for mtn and calculation of data */}

    {!isPrimary && (
      <div className=' w-full transi'>
        <MtnCalculation/>
      </div>
      )}

     {/* toggle for airtel tigo and calculation of data */}

     {!Primary && (
      <div className={`w-full transition-opacity duration-1000 opacity- ${setPrimary ? '100' : '0'}`}>
          <AirteltigoCalculation />
      </div>
     
      )}

      

      

    </div>
  )
}

export default Calculation