import { useState } from "react";
import house from "../assets/house.svg";

export default function TalkDirect() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+91 9999999999";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section className="w-full flex justify-center pt-6 lg:pt-10 pb-20 lg:pb-32 px-4 lg:px-0">
      <div
        className="
          relative w-full
          max-w-[380px] sm:max-w-[700px] lg:max-w-[1280px]
          h-[158px] sm:h-[220px] lg:h-[365px]
          bg-white
          rounded-[16px] lg:rounded-[32px]
          flex items-center
          px-4 sm:px-8 lg:px-16
          overflow-hidden
        "
        style={{
          boxShadow: "0px 4px 20px 3px rgba(179,195,255,0.30)",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <h2 className="font-serifDisplay text-[20px] lg:text-[50px] leading-none text-black mb-1 lg:mb-6">
            Prefer to Talk Directly?
          </h2>

          <p className="font-manrope font-medium text-[12px] lg:text-[24px] leading-[130%] lg:leading-[140%] text-black/50 mb-3 lg:mb-10 max-w-[196px] sm:max-w-[320px] lg:max-w-[569px]">
            Our team is available to answer your questions and provide
            personalized assistance
          </p>

          <div className="flex items-center gap-2 lg:gap-6">
            {/* CALL US BUTTON - Triggering the Modal */}
            <button
              onClick={() => setShowModal(true)}
              className="
                h-[30px] sm:h-[38px] lg:h-[69px]
                px-4 lg:px-[40px]
                rounded-full
                flex items-center justify-center
                bg-[#265BA6] text-white
                font-manrope font-medium text-[10px] lg:text-[18px]
                shadow-[0px_4px_20px_rgba(96,165,250,0.70)]
                lg:shadow-[0px_4px_20px_rgba(0,0,0,0.25)]
                border border-transparent
                transition-all duration-300 ease-out
                hover:bg-white
                hover:text-[#265BA6]
                hover:border-[#265BA6]
                active:bg-[#ffffff]
                active:text-[#265BA6]
                hover:scale-105
                active:scale-95
              "
            >
              Call Us
            </button>

            {/* CHAT BUTTON */}
            <button
              onClick={() => {
                const section = document.getElementById("contact-form");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="
                h-[30px] sm:h-[38px] lg:h-[69px]
                px-4 lg:px-[40px]
                rounded-[25px] lg:rounded-full
                flex items-center justify-center
                bg-white text-[#265BA6]
                border border-[#265BA6]
                font-manrope font-medium text-[10px] lg:text-[18px]
                shadow-[0px_4px_20px_rgba(178,213,255,1)]
                lg:shadow-[0px_4px_20px_rgba(0,0,0,0.25)]
                transition-all duration-300 ease-out
                hover:border-2
                active:bg-[#ffffff]
                active:text-[#265BA6]
                active:scale-95
              "
            >
              Chat with us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            absolute right-0
            sm:relative sm:ml-6
            w-[152px] sm:w-[200px] lg:w-[391px]
            h-[113px] sm:h-auto lg:h-[233px]
            flex items-center justify-center
          "
        >
          <img
            src={house}
            alt="Modern house"
            className="w-full h-full object-contain opacity-80 lg:opacity-100"
          />
        </div>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white w-full max-w-[400px] rounded-[24px] lg:rounded-[32px] p-8 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <div className="text-center">
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-black mb-2">
                Our Contact Number
              </h3>
              <p className="text-gray-500 mb-6 text-sm lg:text-base">
                Click the icon to copy or use the button to call directly.
              </p>

              {/* FIRST NUMBER */}
              <div className="flex items-center justify-between bg-[#F0F7FF] rounded-full px-6 py-4 border border-[#265BA6]/10 mb-4">
                <span className="text-[18px] lg:text-[20px] font-medium text-[#265BA6]">
                  +91 99019 02808
                </span>

                <button
                  onClick={() => navigator.clipboard.writeText("+919901902808")}
                  className="p-2 hover:bg-[#265BA6]/10 rounded-full transition-colors relative"
                >
                  <svg
                    className="w-6 h-6 text-[#265BA6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </button>
              </div>

              <a
                href="tel:+919901902808"
                className="block w-full py-4 bg-[#265BA6] text-white rounded-full font-medium hover:opacity-90 transition-opacity mb-6"
              >
                Call +91 99019 02808
              </a>

              {/* SECOND NUMBER */}
              <div className="flex items-center justify-between bg-[#F0F7FF] rounded-full px-6 py-4 border border-[#265BA6]/10 mb-4">
                <span className="text-[18px] lg:text-[20px] font-medium text-[#265BA6]">
                  +91 99867 00800
                </span>

                <button
                  onClick={() => navigator.clipboard.writeText("+919986700800")}
                  className="p-2 hover:bg-[#265BA6]/10 rounded-full transition-colors relative"
                >
                  <svg
                    className="w-6 h-6 text-[#265BA6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </button>
              </div>

              <a
                href="tel:+919986700800"
                className="block w-full py-4 bg-[#265BA6] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Call +91 99867 00800
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
