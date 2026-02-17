import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/about-hero-vector.svg";

const AboutHero = () => {
  return (
    <section className="w-full bg-white min-h-[466px] lg:min-h-[648px] flex items-start pt-10 pb-8 lg:pt-30 lg:pb-4">
      <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
          <h1 className="text-[28px] lg:text-[70px] font-dm font-normal text-black leading-none w-full max-w-none lg:max-w-none">
            About Amit Construction
          </h1>

          <p className="mt-6 lg:mt-8 text-sm lg:text-[32px] font-manrope font-medium text-black/50 leading-normal w-full max-w-none lg:max-w-[700px]">
            Committed to excellence in every property we handle. We redefine the
            real estate experience through transparency, innovation, and
            unwavering integrity.
          </p>

          <Link
            to="/contact"
            className="group mt-6 lg:mt-12 w-[100px] h-10 lg:w-[189px] lg:h-[70px] bg-[#265BA6] rounded-full flex items-center justify-center transition-all duration-300 ease-out border border-transparent hover:bg-white hover:border-[#265BA6] hover:shadow-[0px_4px_20px_0px_#00000040]"
          >
            <span className="text-xs lg:text-2xl font-manrope font-medium leading-none text-white group-hover:text-[#265BA6] transition-colors duration-300">
              Contact us
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full max-w-[380px] lg:w-1/2 lg:max-w-[589px] flex justify-center lg:justify-end shrink-0 mt-4 lg:mt-0">
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
