"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is GDG?",
    answer: "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    color: " border-l-red-500"
  },
  {
    question: "How can you become a part of GDG ?",
    answer: "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It's a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
    color: "border-l-green-500"
  },
  {
    question: "What does a GDG Lead do?",
    answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    color: "border-l-blue-500"
  },
  {
    question: "How is DSC related to Google?",
    answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
    color: "border-l-yellow-500"
  },
  {
    question: "How to reach us?",
    answer: 'Mail us at "dsc.rknec@gmail.com"',
    color: "border-l-red-500"
  }
];

const FAQItem = ({ question, answer, color, isOpen, toggleOpen }) => (
    <>
  <div className={`mb-4 rounded-full overflow-hidden shadow-sm border border-gray-200 `}>
    <button
      className="w-full text-left p-4 flex justify-between items-center"
      onClick={toggleOpen}
    >
      <span>{question}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  </div>
  <div>
  {isOpen && (
      <div className={` mt-2 p-4  mb-4 rounded-lg overflow-hidden shadow-sm border border-gray-200 ${color}`}>
        <p className='mt-2'>{answer}</p>
      </div>
    )}
  </div>
  </>
  
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4" style={{ fontFamily: 'Product Sans, sans-serif', color: '#5F5F5F' }}>
      <h1 className="text-3xl font-bold mb-6 text-center">FAQs</h1>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          {...item}
          isOpen={openIndex === index}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;