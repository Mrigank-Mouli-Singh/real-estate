import { useNavigate } from "react-router-dom";
import React from "react";
import heroimg from "../assets/heroimg.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-10 px-6 md:py-20 overflow-hidden bg-white">
      {/* Increased width to w-full and max-w to 7xl for a "widely spread" look */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Content Side */}
        <div className="flex-[1.2] w-full text-center lg:text-left">
          <h1 className="text-[28px] md:text-[70px] font-dm font-normal text-black leading-[1.1] md:leading-none">
            Expertise That Guides <br className="hidden md:block" /> Every
            Decision
          </h1>

          {/* Added more margin-top for the "ample space" effect */}
          <p className="font-manrope font-medium text-sm leading-relaxed lg:text-[28px] lg:leading-[38px] text-black/50 mt-6 lg:mt-10 max-w-[700px]">
            Discover a curated collection of the world's most prestigious
            architectural masterpieces.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="group mt-8 lg:mt-14 w-[140px] h-12 lg:w-[220px] lg:h-[70px] bg-[#265BA6] 
            rounded-full transition-all duration-300 ease-out border border-transparent hover:bg-white hover:border-[#265BA6] hover:shadow-[0px_4px_20px_0px_#00000040]"
          >
            <span className="text-sm lg:text-2xl font-manrope font-medium leading-none text-white group-hover:text-[#265BA6] transition-colors duration-300">
              Get In Touch
            </span>
          </button>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[320px] lg:max-w-[550px] aspect-square flex items-center justify-center">
            <img
              src={heroimg}
              alt="Hero Section"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
