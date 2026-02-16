import ctaVector from "../../assets/images/cta-vector.png";

const CTASection = () => {
  return (
    <section className="w-full pt-0 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* WHITE FLOATING CARD */}
        <div className="bg-white w-[380px] h-[164px] md:w-[1280px] md:h-[365px] rounded-[32px] shadow-[0px_4px_20px_3px_#B3C3FF4D] mt-[-30px] md:mt-[-51px] mx-auto relative overflow-hidden md:grid md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="absolute md:relative top-0 left-0 md:top-0 md:left-0 pt-0 md:pt-[31px] pl-0 md:pl-20 w-full h-full">
            <h2 className="absolute md:relative top-4 md:top-0 left-[17px] md:left-0 text-xl md:text-[50px] font-dm font-normal leading-none text-black text-center md:text-left w-[206px] md:w-[534px]">
              <span className="md:hidden">Prefer to Talk Directly?</span>
              <span className="hidden md:inline">Ready To Work With Us?</span>
            </h2>

            <p className="absolute md:relative top-[45px] md:top-0 left-[17px] md:left-0 text-xs md:text-2xl font-manrope font-medium leading-[1.2] md:leading-normal text-[#00000080] w-[206px] md:w-[569px] mt-0 md:mt-[17px]">
              <span className="md:hidden">
                Our team is available to answer your questions and provide
                personalized assistance
              </span>
              <span className="hidden md:inline">
                Join thousand of satisfied clients who have achieved their real
                estate goals with Amit Construction
              </span>
            </p>

            <button className="absolute md:relative top-[109px] md:top-0 left-[17px] md:left-0 group w-[100px] md:w-[225px] h-10 md:h-[70px] bg-[#265BA6] text-white font-medium rounded-full border border-transparent hover:bg-white hover:border-[#265BA6] hover:shadow-[0px_4px_20px_0px_#00000040] flex items-center justify-center gap-2.5 mt-0 md:mt-[35px] transition-all duration-300 ease-out">
              <span className="font-manrope font-medium text-xs md:text-2xl leading-none text-white group-hover:text-[#265BA6] text-center whitespace-nowrap transition-colors duration-300">
                Contact us
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="absolute top-6 md:top-[43px] left-[230px] md:left-[758px] w-[141px] md:w-[442px] h-[110px] md:h-[279px] rounded-2xl overflow-hidden">
            <img
              src={ctaVector}
              alt="CTA Vector"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
