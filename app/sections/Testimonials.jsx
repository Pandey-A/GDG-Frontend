import React from 'react';

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-20 h-20">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#4285F4" strokeWidth="10" strokeDasharray="70.7 282.7" transform="rotate(-90 50 50)" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#DB4437" strokeWidth="10" strokeDasharray="70.7 282.7" transform="rotate(0 50 50)" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#F4B400" strokeWidth="10" strokeDasharray="70.7 282.7" transform="rotate(90 50 50)" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#0F9D58" strokeWidth="10" strokeDasharray="70.7 282.7" transform="rotate(180 50 50)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold">{value}</span>
      </div>
    </div>
    <p className="mt-2 text-sm text-gray-600">{label}</p>
  </div>
);

const StatsDisplay = () => {
  const stats = [
    { value: '03+', label: 'Years' },
    { value: '10+', label: 'Events' },
    { value: '1K+', label: 'Community Members' },
    { value: '200+', label: 'Attendees' },
  ];

  return (
    <div className="flex justify-around p-4 bg-white dark:bg-black dark:text-white">
      {stats.map((stat, index) => (
        <StatItem key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsDisplay;