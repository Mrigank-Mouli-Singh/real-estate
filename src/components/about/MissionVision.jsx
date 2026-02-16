import missionIcon from "../../assets/icons/mission-icon.svg";
import visionIcon from "../../assets/icons/vision-icon.svg";

const MissionVision = () => {
  return (
    <section className="w-full bg-white flex items-center justify-center min-h-[293px] pt-8 pb-4 md:py-0 mt-10 shadow-[0px_4px_30px_0px_#B3C3FF40]">
      <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* MISSION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 md:gap-5 mb-0">
            <img
              src={missionIcon}
              alt="Mission Icon"
              className="w-[29.17px] h-[29.17px] md:w-10 md:h-10 object-contain"
            />
            <h3 className="text-xl md:text-[32px] font-manrope font-semibold md:font-medium leading-none tracking-normal text-black w-auto md:w-[177px]">
              Our Mission
            </h3>
          </div>
          <p className="mt-4 md:mt-[50px] text-xs md:text-2xl font-manrope font-medium md:font-normal leading-normal text-[#00000080] max-w-[340px] md:max-w-[624px] text-left mx-auto md:mx-0">
            To empower individuals and families to achieve their real estate
            dreams through expert guidance and innovative solutions.
          </p>
        </div>

        {/* VISION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 md:gap-5 mb-0">
            <img
              src={visionIcon}
              alt="Vision Icon"
              className="w-[29.17px] h-[29.17px] md:w-10 md:h-10 object-contain"
            />
            <h3 className="text-xl md:text-[32px] font-manrope font-semibold md:font-medium leading-none tracking-normal text-black w-auto md:w-[177px]">
              Our Vision
            </h3>
          </div>
          <p className="mt-4 md:mt-[50px] text-xs md:text-2xl font-manrope font-medium md:font-normal leading-normal text-[#00000080] max-w-[340px] md:max-w-[624px] text-left mx-auto md:mx-0">
            To be the leading real estate agency known for setting industry
            standards in service excellence, innovation and customer
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
