"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const technologies = [
    { name: 'Android', icon: 'android.svg', color: 'bg-green-500' },
    { name: 'Flutter', icon: 'flutter.svg', color: 'bg-blue-500' },
    { name: 'Cloud', icon: 'cloud.svg', color: 'bg-green-500' },
    { name: 'TensorFlow', icon: 'tensor.svg', color: 'bg-red-500' },
    { name: 'Gemini', icon: 'gemini.svg', color: 'bg-purple-500' },
    { name: 'Firebase', icon: 'firebase.svg', color: 'bg-yellow-500' },
];

const TechnologyCard = ({ name, icon, color }) => (
  <div className="flex-shrink-0 w-64 bg-white dark:bg-gray-950 rounded-lg shadow-lg  overflow-hidden mr-4">
    <div className={`h-1 ${color}`}></div>
    <div className="p-4">
      <Image src={icon} alt={`${name} icon`} width={100} height={20} className="mx-auto mb-0" />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <div className="flex justify-center mt-2">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

const Technologies = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => container?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <div className="py-8 px-[100px] relative">
      <h2 className="text-3xl font-bold text-center mb-2">
        <div className='flex flex-col grid-cols-3 '>
        <span className=" px-2">Technologies</span>
        </div>
        
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Domains That Excite Us to Collaborate and Teach!
      </p>
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
        >
          <div className="flex">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
