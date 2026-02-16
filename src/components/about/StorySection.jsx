import Story1 from "../../assets/images/story-1.png";
import Story2 from "../../assets/images/story-2.png";
import Story3 from "../../assets/images/story-3.png";

const StorySection = () => {
  return (
    <section className="w-full bg-blue-50/50 pt-8 md:pt-12">
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-8">
        {/* CENTERED HEADING */}
        <h2 className="text-2xl md:text-[50px] font-dm font-normal text-center text-black leading-none mt-[-19px] mb-2 md:mb-0">
          Our Story
        </h2>
      </div>

      {/* CONTENT BACKGROUND */}
      <div className="w-full bg-[#E6F0FA] min-h-[648px] md:min-h-[790px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            {/* LEFT IMAGE GROUP */}
            <div className="w-full max-w-[301px] md:max-w-none md:w-[628px] shrink-0 flex flex-col gap-4 md:gap-[25px]">
              {/* Top Row */}
              <div className="flex justify-between w-full h-[179px] md:h-[373px]">
                {/* Image 1 */}
                <div className="w-[164px] md:w-[341px] h-full rounded-[9.6px] md:rounded-[20px] overflow-hidden shadow-md">
                  <img
                    src={Story1}
                    alt="Collaborative Real Estate Team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 2 */}
                <div className="w-[127px] md:w-[265px] h-full rounded-[9.6px] md:rounded-[20px] overflow-hidden shadow-md">
                  <img
                    src={Story2}
                    alt="Team Discussion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="w-full h-[146px] md:h-[303px] rounded-[9.6px] md:rounded-[20px] overflow-hidden shadow-md">
                <img
                  src={Story3}
                  alt="Team Hands In"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT TEXT CONTENT */}
            <div className="flex-1 max-w-[380px] md:max-w-[650px] flex flex-col gap-6 md:gap-10 text-left md:text-left">
              <p className="font-manrope font-normal text-xs md:text-2xl leading-[22px] md:leading-[35px] tracking-[0.02em] text-black">
                Founded in 2009, Amit Construction began with a simple vision-to
                transform the way people buy, sell, and invest in real estate.
                What started as a small local agency has grown into one of the
                industry’s most trusted names.
              </p>
              <p className="font-manrope font-normal text-xs md:text-2xl leading-[22px] md:leading-[35px] tracking-[0.02em] text-black">
                Over the years, we’ve helped thousands of clients find their
                dream homes and make smart investments, guided by expertise,
                integrity, and a strong commitment to client satisfaction.
                Today, we continue to innovate and adapt, delivering exceptional
                service in a constantly evolving market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
