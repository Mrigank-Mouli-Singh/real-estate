import HeroImage from "../../assets/homeimage/banner.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen min-h-[400px] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1E3A8A]/30"></div>
      </div>

      <div className="relative z-10 px-6 max-w-4xl pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Exquisite Living <br /> Redefined.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Discover a curated collection of the world's most prestigious
          architectural masterpieces.
        </p>
        <Link to="/contact">
          <button
            className="group mt-6 lg:mt-12 w-[100px] h-10 lg:w-[189px] lg:h-[70px] bg-[#265BA6] 
            rounded-full transition-all duration-300 ease-out border border-transparent hover:bg-white hover:border-[#265BA6] hover:shadow-[0px_4px_20px_0px_#00000040]"
          >
            <span className="text-xs lg:text-2xl font-manrope font-medium leading-none text-white group-hover:text-[#265BA6] transition-colors duration-300">
              Contact now
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
