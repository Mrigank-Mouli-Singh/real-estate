
import React from 'react';
import heroimg from "../assets/heroimg.svg";


const Hero = () => {
  return (
    <section className="pt-48 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          
          <h1 className="font-['DM_Serif_Display'] font-normal text-[70px] leading-[100%] md:text-[70px] lg:text-[70px] mb-6 text-slate-900">
  Expertise That Guides <br className="hidden md:block" /> Every Decision
</h1>

          {/* <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Discover a curated collection of the world's most prestigious architectural masterpieces.
          </p> */}

          <p className="font-['Manrope'] font-medium text-[28px] leading-[100%] tracking-[0%] max-w-lg mx-auto md:mx-0 mb-10 text-slate-500 align-middle">
  Discover a curated collection of the world's most prestigious architectural masterpieces.
</p>

          {/* <button className="bg-[#265BA6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#FFFFFF]  border-xl transition-all active:scale-95">
            Get In Touch
          </button> */}


          <button
  className="bg-[#265BA6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg
             border-2 border-transparent
             hover:bg-white hover:text-[#265BA6] hover:border-[#265BA6]
             transition-all active:scale-95"
>
  Get In Touch
</button>

        </div>
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
            
            <img src={heroimg} alt="Description" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
