"use client";
import { ModeToggle } from '@/components/toggle'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import light from '@/public/Light.svg'




function Header() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className=' sm:sticky top-0 z-10 bg-white shadow-md dark:bg-black '>
      <div className="flex justify-between items-center py-4 px-6 border-b border-gray-300 shadow-md">
        <div className='flex items-center gap-2'>
          <Image 
            src="logo.svg" 
            alt="GDG Logo" 
            width={75} 
            height={34.64} 
            className="dynamic-logo" 
          />
          <p className='font-sans sm:text-md md:text-lg lg:text-xl text-[#868686]'>GDG RCOEM</p>
        </div>
        <div className='sm:hidden md:flex items-center gap-2'>
        <nav className=" md:flex space-x-6">
          <a className='text-[#868686] text-xl'>Home</a>
          <a className='text-[#868686] text-xl'>About</a>
          <a className='text-[#868686] text-xl'>Team</a>
          <a className='text-[#868686] text-xl'>Alumni</a>
          <a className='text-[#868686] text-xl'>Contact</a>
          
          
        </nav>
        </div>
        <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600 dark:text-gray-300">{darkMode}</span>
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                darkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              
              <div
                className={`w-4 h-4 rounded-full bg-yellow-400 shadow-md transform transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
              
            </button>
          </div>
      </div>
      
    </header>
  )
}

export default Header
