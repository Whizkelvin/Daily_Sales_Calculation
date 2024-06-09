import React, { useState } from 'react';
import MtnCalculation from './components/MtnCalculation';
import AirteltigoCalculation from './components/AirteltigoCalculation';

const Calculation = () => {
  const [isPrimary, setIsPrimary] = useState(true);
  const [Primary, setPrimary] = useState(true);

  const toggleButton = () => {
    setIsPrimary(!isPrimary);
  };

  const handleClick = () => {
    setPrimary(!Primary);
  };

  return (
    <div className='text-center flex flex-col justify-center items-center mb-12 scrollbar-hidden bg-gradient-to-t from-green-200 to-blue-200 py-8'>
      <h1 className='text-3xl font-extrabold text-black-700 mb-5'>DAILY SALES CALCULATOR</h1>

      <button
        onClick={toggleButton}
        className={`py-2 px-4 rounded-md ${
          isPrimary ? 'bg-yellow-400 text-white transition-colors duration-500 ease-in-out' : 'bg-inherit text-black border border-black transition-colors duration-500 ease-in-out'
        }`}
      >
        MTN
      </button>
      <button
        onClick={handleClick}
        className={`py-2 px-4 rounded-md my-4 ${
          Primary ? 'bg-gradient-to-r from-red-700 to-blue-700 text-white transition-colors duration-500 ease-in-out' : 'bg-inherit text-black border border-black transition-colors duration-500 ease-in-out'
        }`}
      >
        AIRTELTIGO
      </button>

      {/* Toggle for MTN Calculation with slide transition */}
      <div
        className={`w-full transition-transform duration-500 transform ${
          !isPrimary ? 'translate-x-0 opacity-100' : 'translate-x-full hidden pointer-events-none'
        }`}
      >
        <MtnCalculation />
      </div>

      {/* Toggle for Airteltigo Calculation with scale transition */}
      <div
        className={`w-full transition-transform duration-500 transform ${
          !Primary ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'
        }`}
      >
        <AirteltigoCalculation />
      </div>
    </div>
  );
};

export default Calculation;
