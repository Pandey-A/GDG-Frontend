"use client";
import Image from 'next/image'
import React from 'react'




function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center py-2 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 gap-4 md:gap-8 lg:gap-12 xl:gap-16 mt-10'>
      <div className="text-center space-x-1 lg:text-6xl md:text-5xl  ">
  <h1><span className="text-blue-500 font-sans ">G</span>
  <span className="text-red-500 font-sans ">o</span>
  <span className="text-yellow-500 font-sans">o</span>
  <span className="text-blue-500 font-sans">g</span>
  <span className="text-green-500 font-sans">l</span>
  <span className="text-red-500 font-sans">e</span>
  <span className="text-black font-bold dark:text-white"> Developers Groups</span>
  </h1>
  <h2 className='text-4xl font-bold text-[#868686] dark:text-white text-center'>RBU Chapter</h2>
  
</div>

      </div>
      <div className='flex flex-col items-center justify-center py-10 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 gap-4 md:gap-8 lg:gap-12 xl:gap-16'>
      <Image src='objects.svg' alt='GDG Objects' width={400} height={373.08} className='relative'/>
      </div>
      <div className="text-center mb-8">
        <p className=" text-gray-700 text-xl">
          Google Developer Groups are community groups for college
          and university students interested in Google developer
          technologies.
        </p>
      </div>
        <div className='flex flex-col justify-center items-center mt-2'>
        <button className=" bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 ">
        JOIN US
    </button>
    <div>
    <img src="Vector.svg" alt="Team solving puzzle" className="w-full" />
      <img src="Vector-1.svg" alt="Team solving puzzle" className="w-full" />
      <img src="Vector-2.svg" alt="Team solving puzzle" className="w-full" />
    </div>
    
        </div>
        
      
    </div>
  )
}

export default Hero
