import { Link } from "react-router-dom";
import ctaVector from "../../assets/images/cta-vector.png";

const CTASection = () => {
  return (
    <section className="w-full pt-0 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* FLOATING CARD */}
        <div className="relative mx-auto mt-[-30px] md:mt-[-51px] 
                        w-[380px] h-[164px] md:w-[1280px] md:h-[365px]
                        bg-white rounded-[32px] 
                        shadow-[0px_4px_20px_3px_#B3C3FF4D] 
                        overflow-hidden md:grid md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative md:pt-[31px] md:pl-20 flex flex-col justify-center">

            <h2 className="text-xl md:text-[50px] font-dm font-normal text-black leading-none text-center md:text-left px-4 md:px-0">
              <span className="md:hidden">
                Prefer to Talk Directly?
              </span>
              <span className="hidden md:inline">
                Ready To Work With Us?
              </span>
            </h2>

            <p className="mt-3 md:mt-[17px] text-xs md:text-2xl font-manrope font-medium text-[#00000080] leading-[1.2] md:leading-normal text-center md:text-left px-4 md:px-0 max-w-[569px]">
              <span className="md:hidden">
                Our team is available to answer your questions and provide personalized assistance.
              </span>
              <span className="hidden md:inline">
                Join thousands of satisfied clients who have achieved their real estate goals with Amit Construction.
              </span>
            </p>

            <Link
              to="/contact"
              className="group mt-4 md:mt-[35px] 
                         w-[100px] md:w-[225px] h-10 md:h-[70px] 
                         bg-[#265BA6] rounded-full 
                         flex items-center justify-center 
                         border border-transparent 
                         hover:bg-white hover:border-[#265BA6] 
                         hover:shadow-[0px_4px_20px_0px_#00000040] 
                         transition-all duration-300 ease-out mx-auto md:mx-0"
            >
              <span className="text-xs md:text-2xl font-manrope font-medium text-white group-hover:text-[#265BA6] transition-colors duration-300">
                Contact us
              </span>
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center md:justify-end pr-4 md:pr-20 mt-6 md:mt-0">
            <img
              src={ctaVector}
              alt="Call to action illustration"
              className="w-[141px] md:w-[442px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
