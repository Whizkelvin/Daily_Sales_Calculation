import React, { useState, useEffect } from 'react';
import MtnCalculation from './components/MtnCalculation';
import AirteltigoCalculation from './components/AirteltigoCalculation';

const Calculation = () => {
  const [activeButton, setActiveButton] = useState(() => {
    // Use localStorage to get the active button state, default to 'MTN'
    return localStorage.getItem('activeButton') || 'MTN';
  });

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  // Save the active button state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  const [isOpen, setIsOpen] = useState(<MtnCalculation/>)
 
  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='text-center flex flex-col justify-center items-center  scrollbar-hidden bg-gradient-to-t from-green-200 to-blue-200 py-8'>
      <h1 className='text-3xl font-extrabold text-black-700 mb-5 font-serif'>DAILY SALES CALCULATOR</h1>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleButtonClick('MTN')}
          disabled={activeButton === 'MTN'}
          className={`py-2 px-4 rounded-md ${
            activeButton === 'MTN' ? 'bg-yellow-400 text-white transition-colors duration-500 ease-in-out' : 'bg-gray-200 text-gray-500 border border-gray-500 cursor-not-allowed transition-colors duration-500 ease-in-out'
          }`}
        >
          MTN
        </button>
        <button
          onClick={() => handleButtonClick('AirtelTigo')}
          disabled={activeButton === 'AirtelTigo'}
          className={`py-2 px-4 rounded-md ${
            activeButton === 'AirtelTigo' ? 'bg-gradient-to-r from-red-700 to-blue-700 text-white transition-colors duration-900 ease-in-out' : 'bg-gray-200 text-gray-500 border border-gray-500 cursor-not-allowed transition-colors duration-500 ease-in-out'
          }`}
        >
          AIRTELTIGO
        </button>


      </div>

      <div className=' w-full relative h-auto overflow-x-hidden'>

        

        {/* Toggle for MTN Calculation with slide transition */}
      <div
        className={` w-full transition-all duration-500 transform absolute ${
          activeButton === 'MTN' ? ' transition duration-[2000ms] ease-in-out opacity-100 ' : ' transition duration-[2000] ease-in-out opacity-0 pointer-events-none'
        }`}
      >
        <MtnCalculation />

        
      </div>

      {/* Toggle for Airteltigo Calculation with scale transition */}
      <div
        className={`w-full transition-all duration-500 transform ${
          activeButton === 'AirtelTigo' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <AirteltigoCalculation />
      </div>

      </div>

      
    </div>
  );
};

export default Calculation;
