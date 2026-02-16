import heartIcon from "../../assets/icons/heart-icon.svg";
import shieldIcon from "../../assets/icons/shield-icon.svg";
import excellenceIcon from "../../assets/icons/excellence-icon.svg";
import collaborationIcon from "../../assets/icons/collaboration-icon.svg";

const values = [
  {
    icon: heartIcon,
    title: "Client Centric",
    desc: "Your satisfaction and success are at the heart of everything we do",
  },
  {
    icon: shieldIcon,
    title: "Integrity",
    desc: "We maintain the highest standards of honesty and transparency",
  },
  {
    icon: excellenceIcon,
    title: "Excellence",
    desc: "Committed to delivering exceptional results and service quality",
  },
  {
    icon: collaborationIcon,
    title: "Collaboration",
    desc: "Working together with clients and partners to achieve shared goals",
  },
];

const CoreValues = () => {
  return (
    <section className="w-full flex items-center justify-center min-h-[473px] pt-0 pb-4 md:pt-12 md:pb-8">
      <div className="w-full max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-[50px] font-dm font-normal leading-none tracking-normal text-black text-center max-w-[191px] md:max-w-[576px] mx-auto mb-2 md:mb-10">
          Our Core Values
        </h2>
        <p className="text-[13px] md:text-[32px] font-manrope font-medium leading-none text-[#00000080] text-center max-w-none md:max-w-[991px] mx-auto mb-6 md:mb-20">
          The principles that guide our work and define who we are
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="w-[170px] h-[159px] md:w-[302px] md:h-[264px] bg-white rounded-[10px] border-2 border-[#60A5FA] hover:border-[#265BA6] hover:bg-[#60A5FA1A] shadow-[0px_4px_30px_0px_#60A5FA4D] flex flex-col items-center transition-all duration-300 group px-2 md:px-4"
            >
              <div className="w-[45px] h-[45px] md:w-[80px] md:h-[80px] flex items-center justify-center mt-3 md:mt-5 mb-1.5 md:mb-[6.4px] rounded-full">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col items-center w-full">
                <h4 className="text-lg md:text-[32px] font-manrope font-medium leading-none text-black text-center w-full md:w-[235px] mb-2 md:mb-6">
                  {value.title}
                </h4>

                <p className="text-[10px] md:text-base font-manrope font-medium leading-normal text-[#00000080] text-center w-full md:w-[241px]">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
