export default function TalkDirect() {
  return (
    <section className="w-full flex justify-center mt-12 mb-10">
      <div
        className="w-[1280px] h-[365px] rounded-[32px] bg-white flex items-center px-16"
        style={{
          boxShadow: "0px 4px 20px 3px rgba(179,195,255,0.30)",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h2 className="font-serifDisplay text-[50px] leading-[100%] text-black mb-6">
            Prefer to Talk Directly?
          </h2>

          <p className="font-manrope font-medium text-[24px] leading-[140%] text-black/50 mb-10 max-w-[569px]">
            Our team is available to answer your questions and provide personalized assistance
          </p>

          <div className="flex items-center gap-6">
            
            {/* CALL US BUTTON (Primary Filled) */}
            <button
              className="
                h-[69px] px-[40px]
                rounded-full flex items-center justify-center

                bg-[#265BA6] text-white
                font-manrope font-medium text-[18px]

                shadow-[0px_4px_20px_rgba(0,0,0,0.25)]

                transition-all duration-300 ease-out
                hover:bg-white hover:text-[#265BA6]
                hover:border hover:border-[#265BA6]
                hover:shadow-[0px_6px_18px_rgba(38,91,166,0.25)]

                active:scale-95
              "
            >
              Call Us
            </button>

            {/* CHAT WITH US BUTTON (Outlined Animated Border) */}
            <button
              className="
                w-[222px] h-[69px]
                rounded-full py-[18px] px-[40px]
                flex items-center justify-center gap-[10px]

                bg-white text-[#265BA6]
                border border-[#265BA6] box-border
                font-manrope font-medium text-[18px]

                shadow-[0px_4px_20px_rgba(0,0,0,0.25)]

                transition-all duration-300 ease-out
                hover:border-2

                active:scale-95
              "
            >
              Chat with us
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[391px] h-[233px] ml-12 flex items-center justify-center">
          <img
            src="/images/house.png"
            alt="Modern house"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
