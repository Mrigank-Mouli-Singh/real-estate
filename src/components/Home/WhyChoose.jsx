
import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const WhyChoose = () => {
  const points = [
    "Extensive property listing across prime locations",
    "Expert real estate agents with local market knowledge",
    "Transparent pricing and no hidden fees",
    "End-to-end support from search to closing"
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-[#F0F7FF] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 space-y-6 md:space-y-8">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">Why choose</h3>
            <h2 className="text-3xl md:text-6xl font-bold text-[#1E3A8A] leading-tight">Amit Constructions?</h2>
          </div>
          
          <ul className="space-y-3 md:space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-gray-700 font-medium text-sm md:text-base">
                {/* Fixed: removed invalid md:size prop and added responsive tailwind classes */}
                <CheckCircle2 className="text-[#1E3A8A] flex-shrink-0 mt-0.5 w-5 h-5 md:w-6 md:h-6" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
              alt="House model and team" 
              className="w-full h-auto object-cover min-h-[300px]"
            />
          </div>

          {/* Review Bubble - Positioned carefully for mobile */}
          <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-12 max-w-[260px] md:max-w-[320px] bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-gray-100 animate-bounce-slow">
            <div className="flex gap-0.5 md:gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                /* Fixed: removed invalid md:size prop and added responsive tailwind classes */
                <Star key={i} fill="#FBBF24" className="text-[#FBBF24] w-3.5 h-3.5 md:w-4 md:h-4" />
              ))}
            </div>
            <p className="text-xs md:text-sm font-bold text-gray-900 mb-1 md:mb-2 leading-snug">
              "Handled everything with precision and care."
            </p>
            <p className="text-[10px] md:text-xs text-gray-500 mb-3 md:mb-4 leading-relaxed">
              Amrit Constructions listened carefully to our needs and helped us make decisions that felt right, not rushed.
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" 
                alt="Vikram Seth" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[10px] md:text-xs font-bold text-gray-900">Vikram Seth</p>
                <p className="text-[9px] md:text-[10px] text-gray-400">Home Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
