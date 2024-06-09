import React from 'react'

const Greetings = () => {

    const currentTime = new Date().getHours();
    const greeting = (currentTime < 12) ? 'Good Morning' : ((currentTime < 18) ? 'Good Afternoon' : 'Good Evening');
    

  return (
    
    <div className=' flex justify-center items-center shadow-md shadow-black-500/ 50 h-12 sticky w-full font-semibold text-lg z-50 top-0 bg-white'> Hello, {greeting}</div>

  )
}

export default Greetings