
import HeroImage from "../../assets/homeimage/banner.svg";

const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center">
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
          Discover a curated collection of the world's most prestigious architectural masterpieces.
        </p>
        <button className="bg-[#265BA6] hover:bg-white text-white  hover:text-black font-medium px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl">
          Contact now
        </button>
      </div>
    </div>
  );
};

export default Hero;
