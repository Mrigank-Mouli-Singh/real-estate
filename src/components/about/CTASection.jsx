import { Link } from "react-router-dom";
import ctaVector from "../../assets/images/cta-vector.png";

const CTASection = () => {
  return (
    <section className="w-full pt-0 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* FLOATING CARD */}
        <div
          className="relative mx-auto mt-[-30px] md:mt-[-51px] 
                        w-full max-w-[380px] sm:max-w-[700px] xl:max-w-[1280px]
                        h-[164px] sm:h-[220px] xl:h-[365px]
                        bg-white rounded-[32px] 
                        shadow-[0px_4px_20px_3px_#B3C3FF4D] 
                        overflow-hidden flex items-center justify-between
                        px-4 sm:px-8 xl:px-20"
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <h2 className="text-xl sm:text-3xl xl:text-[50px] font-dm font-normal text-black leading-none text-left">
              <span className="xl:hidden">Prefer to Talk Directly?</span>
              <span className="hidden xl:inline">Ready To Work With Us?</span>
            </h2>

            <p className="mt-3 sm:mt-4 xl:mt-[17px] text-xs sm:text-base xl:text-2xl font-manrope font-medium text-[#00000080] leading-[1.2] sm:leading-normal xl:leading-normal text-left max-w-[200px] sm:max-w-[400px] xl:max-w-[569px]">
              <span className="xl:hidden">
                Our team is available to answer your questions and provide
                personalized assistance.
              </span>
              <span className="hidden xl:inline">
                Join thousands of satisfied clients who have achieved their real
                estate goals with Amit Construction.
              </span>
            </p>

            <Link
              to="/contact"
              className="group mt-4 sm:mt-6 xl:mt-[35px] 
                         w-[100px] sm:w-[150px] xl:w-[225px] 
                         h-10 sm:h-12 xl:h-[70px] 
                         bg-[#265BA6] rounded-full 
                         flex items-center justify-center 
                         border border-transparent 
                         hover:bg-white hover:border-[#265BA6] 
                         hover:shadow-[0px_4px_20px_0px_#00000040] 
                         transition-all duration-300 ease-out"
            >
              <span className="text-xs sm:text-sm xl:text-2xl font-manrope font-medium text-white group-hover:text-[#265BA6] transition-colors duration-300">
                Contact us
              </span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute right-0 sm:relative w-[141px] sm:w-[250px] xl:w-[442px] h-full sm:h-auto flex items-center justify-center xl:justify-end shrink-0 opacity-80 sm:opacity-100">
            <img
              src={ctaVector}
              alt="Call to action illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
