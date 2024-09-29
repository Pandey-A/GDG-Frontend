import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-[#5F5F5F] mb-12">Get To Know Us!</h1>
      
      <section className="flex flex-col justify-center items-center mb-16">
        <h2 className="flex flex-col justify-center items-center text-3xl font-semibold text-gray-700 mb-2">Our Mission</h2>
        <div className="w-24 h-1 bg-blue-500 mb-6"></div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="about1.svg" alt="Team collaboration" className="w-full" />
          </div>
          <div className="md:w-1/2 md:pl-8 relative">
            <div className="absolute top-0 right-0 w-1 bg-blue-500 h-full rounded-r-md"></div>
            <p className="text-gray-600 pr-4">
              Our mission involves community engagement, leadership development, building strong tech
              foundation, while enabling all tech enthusiasts to contribute to the global society.
            </p>
          </div>
        </div>
      </section>
      
      <section className='flex flex-col justify-center items-center'>
        <h2 className="flex flex-col justify-center items-center text-3xl font-semibold text-gray-700 mb-2">Our Perspective</h2>
        <div className="w-24 h-1 bg-green-500 mb-6"></div>
        <div className="flex flex-col md:flex-row-reverse items-start">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
            <img src="about2.svg" alt="Team solving puzzle" className="w-full" />
            
          </div>
          <div className="md:w-1/2 pr-8 relative">
            <div className="absolute top-0 left-0 w-1 bg-green-500 h-full rounded-l-2xl"></div>
            <p className="text-gray-600 pl-4">
              We're a community-driven initiative aiming to bridge the gap between research and practice, develop
              evolutionary thinking and network throughout the process. We believe in connecting fellow developers,
              spreading stimulative ideas and working for a solution driven team.
            </p>
          </div>
        </div>
      </section>
      <section>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">What Keeps Us Going?</h1>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="about3.svg" alt="Team collaboration" className="w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8 relative">
          <div className="absolute top-0 right-0 w-1 bg-yellow-400 h-full rounded-r-sm "></div>
          <p className="text-gray-600 pr-4">
            Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication,
            and leading with solutions is what helps us achieve new heights.
            <br /><br />
            The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve
            their skills and broaden their horizons of knowledge.
          </p>
        </div>
      </div>
      </div>
      </section>
    
    </div>
  );
};

export default About;