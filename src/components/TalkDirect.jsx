import house from "../assets/house.png";

export default function TalkDirect() {
  return (
    <section className="w-full flex justify-center mt-12 mb-10 px-4 lg:px-0">
      <div
        className="w-full max-w-[380px] lg:max-w-[1280px] h-[158px] lg:h-[365px] rounded-[16px] lg:rounded-[32px] bg-white flex items-center px-4 lg:px-16 overflow-hidden relative"
        style={{
          boxShadow: "0px 4px 20px 3px rgba(179,195,255,0.30)",
        }}
      >
        {/* LEFT CONTENT: Text and Buttons */}
        <div className="flex-1 z-10">
          <h2 className="font-serifDisplay text-[20px] lg:text-[50px] leading-[100%] text-black mb-1 lg:mb-6">
            Prefer to Talk Directly?
          </h2>

          <p className="font-manrope font-medium text-[12px] lg:text-[24px] leading-[130%] lg:leading-[140%] text-black/50 mb-3 lg:mb-10 max-w-[196px] lg:max-w-[569px]">
            Our team is available to answer your questions and provide personalized assistance
          </p>

          <div className="flex items-center gap-2 lg:gap-6">
            
            {/* CALL US BUTTON */}
            <button
              className="
                h-[30px] lg:h-[69px] px-4 lg:px-[40px]
                rounded-full flex items-center justify-center

                bg-[#265BA6] text-white
                font-manrope font-medium text-[10px] lg:text-[18px]

                shadow-[0px_4px_20px_rgba(96,165,250,0.70)] 
                lg:shadow-[0px_4px_20px_rgba(0,0,0,0.25)]

                transition-all duration-300 ease-out
                border border-transparent

                hover:bg-white 
                hover:text-[#265BA6]
                hover:border-[#265BA6]
                hover:shadow-[0px_6px_18px_rgba(38,91,166,0.25)]
                hover:scale-105

                active:bg-[#ffffff]
                active:text-[#265BA6]
                active:scale-95
              "
            >
              Call Us
            </button>

            {/* CHAT WITH US BUTTON */}
            <button
              className="
                w-auto lg:w-[222px] h-[30px] lg:h-[69px]
                rounded-[25px] lg:rounded-full px-4 lg:px-[40px]
                flex items-center justify-center

                bg-white text-[#265BA6]
                border border-[#265BA6]
                font-manrope font-medium text-[10px] lg:text-[18px]

                shadow-[0px_4px_20px_rgba(178,213,255,1)] lg:shadow-[0px_4px_20px_rgba(0,0,0,0.25)]

                transition-all duration-300 ease-out
                hover:border-2
                active:scale-95
              "
            >
              Chat with us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE: House Illustration */}
        <div className="absolute right-0 lg:relative w-[152px] lg:w-[391px] h-[113px] lg:h-[233px] flex items-center justify-center">
          <img
            src={house}
            alt="Modern house"
            className="w-full h-full object-contain opacity-80 lg:opacity-100"
          />
        </div>

      </div>
    </section>
  );
}
