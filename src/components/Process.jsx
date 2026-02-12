
// const Process = () => {
//   const steps = [
//     { number: 1, title: 'Consultation', text: 'We start with understanding your needs and preferences.' },
//     { number: 2, title: 'Property Search', text: 'Our experts find properties that match your criteria.' },
//     { number: 3, title: 'Site Visits', text: 'Schedule tours of your shortlisted properties.' },
//     { number: 4, title: 'Closing Deal', text: 'We handle all paperwork and finalize your transaction.' },
//   ];

//   return (
//     <section className="bg-[#E6F0FA] py-24 px-6 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row items-start gap-12 relative">
//           {steps.map((step, idx) => (
//             <div key={idx} className="flex-1 relative group text-center md:text-left">
//               <div className="flex flex-col items-center md:items-start">
//                 <div className="relative z-10">
//                   <div className="w-16 h-16 bg-[#60A5FA] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-8 transition-transform group-hover:scale-110">
//                     {step.number}
//                   </div>
//                   {/* Dotted Arrow */}
//                   {idx < steps.length - 1 && (
//                     <div className="hidden md:block absolute top-8 left-16 w-[350%] border-t-2 border-dotted border-blue-300 z-0">
//                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-gray-300 rotate-45" />
//                     </div>
//                   )}
//                 </div>
//                 <h4 className="text-2xl font-bold mb-4 text-slate-800">{step.title}</h4>
//                 <p className="text-slate-500 leading-relaxed">{step.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;




import React from 'react';


const steps  = [
  { number: 1, title: 'Consultation', text: 'We start with understanding your needs and preferences.' },
  { number: 2, title: 'Property Search', text: 'Our experts find properties that match your criteria.' },
  { number: 3, title: 'Site Visits', text: 'Schedule tours of your shortlisted properties.' },
  { number: 4, title: 'Closing Deal', text: 'We handle all paperwork and finalize your transaction.' },
];

const Process = () => {
  return (
    <section className="bg-[#E6F0FA] py-24 px-6 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Responsive Container */}
        <div className="relative flex flex-col md:flex-row gap-24 md:gap-4 items-stretch md:items-start">
          
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const isLast = idx === steps.length - 1;

            return (
              <div 
                key={idx} 
                className={`flex-1 relative group flex flex-col 
                  ${isEven ? 'items-start text-left' : 'items-end text-right md:items-start md:text-left'}
                  w-full
                `}
              >
                {/* Step Circle */}
                <div className="relative z-20 mb-6 md:mb-8">
                  <div className="w-20 h-20 md:w-16 md:h-16 bg-[#60A5FA] text-white rounded-full flex items-center justify-center text-4xl md:text-2xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>

                  {/* DESKTOP CONNECTOR: Horizontal Dotted Line */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 left-full w-[calc(100%+16px)] h-0 -translate-y-1/2 -ml-2 z-10">
                      <div className="w-full border-t-2 border-dotted border-slate-400 relative">
                        {/* Arrowhead */}
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-slate-400 rotate-45" />
                      </div>
                    </div>
                  )}

                  {/* MOBILE CONNECTOR: Vertical Zigzag (Snake) */}
                  {!isLast && (
                    <div className="md:hidden absolute top-1/2 z-0">
                      {/* From Even to Odd (1 -> 2, 3 -> 4): Right then Down */}
                      {isEven ? (
                        <div className="absolute left-10 top-0 w-[50vw] h-[14rem] border-t-2 border-r-2 border-dotted border-slate-400 rounded-tr-[2rem]">
                          {/* Arrow pointing down at the next number */}
                          <div className="absolute -bottom-1 right-[-5px] w-2.5 h-2.5 border-r-2 border-b-2 border-slate-400 rotate-45" />
                        </div>
                      ) : (
                        /* From Odd to Even (2 -> 3): Left then Down */
                        <div className="absolute right-10 top-0 w-[50vw] h-[14rem] border-t-2 border-l-2 border-dotted border-slate-400 rounded-tl-[2rem]">
                          {/* Arrow pointing down at the next number */}
                          <div className="absolute -bottom-1 left-[-5px] w-2.5 h-2.5 border-l-2 border-b-2 border-slate-400 -rotate-45" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className={`relative z-20 w-full max-w-[280px] md:max-w-none ${!isEven && 'md:text-left'}`}>
                  <h4 className="text-3xl md:text-2xl font-bold mb-3 text-slate-900  transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-lg md:text-sm">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Process;
