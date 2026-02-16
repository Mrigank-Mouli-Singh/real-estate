export default function ContactForm() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      
      {/* SECTION TITLE */}
      <h2 className="font-medium text-[20px] lg:text-[40px] leading-[100%] text-black mb-6 text-center">
        Send Us a Message
      </h2>

      {/* FORM CARD */}
      <div className="w-full max-w-[380px] lg:max-w-[628px] bg-[#E6F0FA] lg:bg-[#EAF4FF] rounded-[16px] lg:rounded-[20px] p-6 lg:p-8 shadow-[0px_10px_30px_rgba(38,91,166,0.15)]">
        
        <div className="flex flex-col gap-4 lg:gap-6">

          {/* INPUT FIELDS */}
          {[
            { label: "Full Name", type: "text", placeholder: "Riya Sharma" },
            { label: "Email Address", type: "email", placeholder: "Riya@example.com" },
            { label: "Phone Number", type: "tel", placeholder: "+91 9999999999" },
          ].map((field) => (
            <div key={field.label}>
              <label className="font-medium text-[18px] lg:text-[24px] leading-[100%] text-black mb-2 lg:mb-3 block">
                {field.label}
              </label>

              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  w-full h-[40px] lg:h-[65px]
                  rounded-full px-6
                  bg-white
                  outline-none
                  text-[16px] lg:text-[18px]
                  placeholder:text-[#C6C6C6]
                  shadow-[0px_4px_20px_rgba(96,165,250,0.10)]
                  focus:shadow-[0px_4px_25px_rgba(38,91,166,0.20)]
                  transition-all duration-300
                "
              />
            </div>
          ))}

          {/* SUBJECT */}
          <div>
            <label className="font-medium text-[18px] lg:text-[24px] leading-[100%] text-black mb-2 lg:mb-3 block">
              Subject
            </label>

            <div className="relative">
              <select
                className="
                  w-full h-[40px] lg:h-[65px]
                  rounded-full px-6
                  bg-white
                  outline-none
                  text-[16px] lg:text-[18px]
                  text-[#C6C6C6]
                  appearance-none
                  shadow-[0px_4px_20px_rgba(96,165,250,0.10)]
                  focus:shadow-[0px_4px_25px_rgba(38,91,166,0.20)]
                  transition-all duration-300
                  cursor-pointer
                "
                defaultValue=""
              >
                <option value="" disabled>Select Subject</option>
                <option value="buy">Buy property</option>
                <option value="sell">Sell property</option>
                <option value="materials">Construction materials</option>
                <option value="consultation">Consultation</option>
                <option value="others">Others</option>
              </select>

              {/* Custom Dropdown Arrow */}
              <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 text-[#C6C6C6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="font-medium text-[18px] lg:text-[24px] leading-[100%] text-black mb-2 lg:mb-3 block">
              Message
            </label>

            <textarea
              placeholder="Tell us how we can help you"
              className="
                w-full h-[40px] lg:h-[65px]
                rounded-[20px] lg:rounded-[30px]
                px-6 py-4
                bg-white
                outline-none
                resize-none
                text-[16px] lg:text-[18px]
                placeholder:text-[#C6C6C6]
                shadow-[0px_4px_20px_rgba(96,165,250,0.10)]
                focus:shadow-[0px_4px_25px_rgba(38,91,166,0.20)]
                transition-all duration-300
              "
            />
          </div>

          {/* SEND MESSAGE BUTTON */}
          <button
            className="
              group relative
              w-full h-[50px] lg:h-[79px]
              mt-2 rounded-full
              font-medium text-[18px] lg:text-[20px]
              overflow-hidden
              bg-[#265BA6] text-white
              shadow-[0px_4px_30px_rgba(0,0,0,0.25)]
              transition-all duration-300 ease-in-out
              border border-transparent
              hover:bg-white
              hover:text-[#265BA6]
              hover:border-[#265BA6]
              hover:shadow-[0px_6px_25px_rgba(38,91,166,0.30)]
              hover:scale-105
              active:bg-[#ffffff]
              active:text-[#265BA6]
              active:scale-95
              active:shadow-inner
            "
          >
            <span className="relative z-10">
              Send Message
            </span>

            {/* Glow Layer */}
            <span
              className="
                absolute inset-0
                bg-white
                opacity-0
                group-hover:opacity-10
                group-active:opacity-10
                transition duration-300
              "
            />
          </button>

        </div>
      </div>
    </div>
  );
}
