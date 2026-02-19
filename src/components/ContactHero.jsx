import contactIllustration from "../assets/contact-illustration.svg";

export default function ContactHero() {
  return (
    <section className="w-full bg-white flex justify-center overflow-hidden">
      {/* Mobile: Vertical stack, height auto
        Desktop (lg): Fixed 1440px width and 625px height 
      */}
      <div className="relative w-full lg:w-[1440px] flex flex-col items-center pt-10 lg:pt-0 lg:block lg:h-[625px]">
        {/* TEXT BLOCK */}
        <div className="flex flex-col items-center text-center px-6 lg:px-0 lg:text-left lg:absolute lg:left-[80px] lg:top-[140px] lg:items-start">
          {/* <h1 className="font-serif font-bold text-[60px] leading-tight lg:text-[70px] lg:leading-[70px] text-black">
            Contact Us
          </h1> */}
          <h1 className="text-[32px] md:text-[70px] font-dm font-normal text-black leading-none max-w-[355px] md:max-w-none">
            Contact Us
          </h1>

          <p className="font-manrope font-medium text-[16px] leading-relaxed lg:text-[32px] lg:leading-normal text-black/50 mt-4 lg:mt-[40px] max-w-[340px] lg:max-w-[701px]">
            Get in touch with our team for expert guidance and personalized real
            estate support. We’re here to help you make confident, well-informed
            decisions.
          </p>

          {/* BLUE MOBILE BUTTON - Hidden on desktop */}
          {/* <button className="mt-8 lg:hidden w-[184px] h-[48px] bg-[#265BA6] text-white rounded-full font-manrope font-medium text-[16px] shadow-lg active:scale-95 transition-transform">
            Get in touch
          </button> */}
          <button
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              group mt-6 lg:mt-12 w-[100px] h-10 lg:w-[189px] lg:h-[70px] bg-[#265BA6] 
            rounded-full transition-all duration-300 ease-out border border-transparent hover:bg-white hover:border-[#265BA6] hover:shadow-[0px_4px_20px_0px_#00000040]
            "
          >
            <span className="text-xs lg:text-2xl font-manrope font-medium leading-none text-white group-hover:text-[#265BA6] transition-colors duration-300">
              Get In Touch
            </span>
          </button>
        </div>

        {/* ILLUSTRATION */}
        <img
          src={contactIllustration}
          alt="Customer support illustration"
          className="mt-12 lg:mt-0 w-[280px] h-[280px] lg:w-[428px] lg:h-[428px] object-contain lg:absolute lg:top-[144px] lg:left-[932px]"
        />
      </div>
    </section>
  );
}
