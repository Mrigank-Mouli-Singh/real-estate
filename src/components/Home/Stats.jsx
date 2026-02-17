
import React from 'react';

const Stats = () => {
  const statsData = [
    { value: "5,000+", label: "Properties Listed" },
    { value: "10,000+", label: "Happy Customers" },
    { value: "15+", label: "Years of Experience" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:12 tracking-tight">
        A Record Built on Experience
      </h2>
      
      {/* Container is now white with black text, and stays horizontal (row) even on small screens */}
      <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-16 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 max-w-6xl mx-auto flex flex-row justify-between items-center gap-2 md:gap-6 overflow-hidden">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center flex-1">
              <span className="text-xl sm:text-2xl md:text-6xl font-extrabold mb-1 md:mb-2 text-[#1E3A8A]">
                {stat.value}
              </span>
              <span className="text-gray-400 font-medium uppercase tracking-tighter sm:tracking-widest text-[8px] sm:text-[10px] md:text-sm leading-tight">
                {stat.label.split(' ')[0]} <br className="md:hidden" /> {stat.label.split(' ').slice(1).join(' ')}
              </span>
            </div>
            {index < statsData.length - 1 && (
              <div className="w-px h-8 md:h-16 bg-gray-200"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stats;
