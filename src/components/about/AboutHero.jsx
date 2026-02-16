import HeroImage from "../../assets/images/about-hero-vector.svg";

const AboutHero = () => {
  return (
    <section className="w-full bg-white min-h-[466px] md:min-h-[648px] flex items-start pt-32 pb-8 md:pt-40 md:pb-4">
      <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* CONTENT */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[32px] md:text-[70px] font-dm font-normal text-black leading-none tracking-normal max-w-[355px] md:max-w-none">
            About Amit Construction
          </h1>

          <p className="text-sm md:text-[32px] font-manrope font-medium text-black/50 leading-normal md:leading-normal max-w-[373px] md:max-w-[700px] mt-6 md:mt-8 tracking-normal">
            Committed to excellence in every property we handle. We redefine the
            real estate experience through transparency, innovation and
            unwavering integrity
          </p>

          <button className="group mt-6 md:mt-12 w-[100px] h-10 md:w-[189px] md:h-[70px] bg-[#265BA6] rounded-full flex items-center justify-center transition-all duration-300 ease-out border border-transparent hover:bg-white hover:border-[#265BA6] hover:shadow-[0px_4px_20px_0px_#00000040]">
            <span className="text-xs md:text-2xl font-manrope font-medium leading-none text-white group-hover:text-[#265BA6] text-center whitespace-nowrap transition-colors duration-300">
              Contact us
            </span>
          </button>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-[380px] md:max-w-[589px] flex justify-center md:justify-end shrink-0 mt-4 md:mt-0">
          <img
            src={HeroImage}
            alt="Real Estate Planning"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
