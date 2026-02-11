export default function ContactForm() {
  return (
    <div className="flex flex-col">
      
      {/* SECTION TITLE */}
      <h2 className="font-manrope font-medium text-[32px] leading-[32px] text-black mb-6 text-center">
        Send us a Message
      </h2>

      {/* BLUE FORM CARD */}
      <div className="w-[628px] bg-[#EAF4FF] rounded-[20px] p-8 shadow-[0px_10px_30px_rgba(38,91,166,0.15)]">
        
        <div className="flex flex-col gap-6">

          {/* Full Name */}
          <div>
            <label className="font-manrope font-medium text-[24px] leading-[24px] text-black mb-3 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Riya Sharma"
              className="w-full h-[65px] rounded-full px-6 bg-white outline-none shadow-[0px_4px_10px_rgba(96,165,250,0.10)]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="font-manrope font-medium text-[24px] leading-[24px] text-black mb-3 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Riya@example.com"
              className="w-full h-[65px] rounded-full px-6 bg-white outline-none shadow-[0px_4px_10px_rgba(96,165,250,0.10)]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="font-manrope font-medium text-[24px] leading-[24px] text-black mb-3 block">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 9999999999"
              className="w-full h-[65px] rounded-full px-6 bg-white outline-none shadow-[0px_4px_10px_rgba(96,165,250,0.10)]"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="font-manrope font-medium text-[24px] leading-[24px] text-black mb-3 block">
              Subject
            </label>
            <select className="w-full h-[65px] rounded-full px-6 bg-white outline-none shadow-[0px_4px_10px_rgba(96,165,250,0.10)] text-gray-400">
              <option>Select Subject</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="font-manrope font-medium text-[24px] leading-[24px] text-black mb-3 block">
              Message
            </label>
            <textarea
              placeholder="Tell us how can we help you..."
              className="w-full h-[65px] rounded-full px-6 py-5 bg-white outline-none resize-none shadow-[0px_4px_10px_rgba(96,165,250,0.10)]"
            />
          </div>

          {/* Button */}
          <button className="group relative w-full h-[65px] rounded-full bg-[#265BA6] text-white font-manrope font-medium text-[20px] overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#265BA6] hover:border hover:border-[#265BA6] hover:shadow-lg active:scale-95">
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300"></span>
          </button>

        </div>
      </div>
    </div>
  );
}
