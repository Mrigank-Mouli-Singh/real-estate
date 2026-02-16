import achievementsMain from "../../assets/images/achievements-main.png";
import awardIcon from "../../assets/icons/award-icon.svg";
import usersIcon from "../../assets/icons/users-icon.svg";
import starIcon from "../../assets/icons/star-icon.svg";
import trendingIcon from "../../assets/icons/trending-icon.svg";

const stats = [
  {
    icon: awardIcon,
    value: "50+",
    label: "Industry Awards",
  },
  {
    icon: usersIcon,
    value: "10,000+",
    label: "Happy Clients",
  },
  {
    icon: starIcon,
    value: "4.9/4",
    label: "Customer Rating",
  },
  {
    icon: trendingIcon,
    value: "$2B+",
    label: "Property value sold",
  },
];

const Achievements = () => {
  return (
    <section className="w-full bg-transparent pt-0 pb-8 md:pt-14 md:pb-12">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center md:grid md:grid-cols-2 gap-10 md:gap-20 px-6 md:px-0">
        {/* TOP: Content (Mobile order 1) */}
        <div className="w-full flex flex-col items-center md:items-center space-y-6 md:space-y-10 order-1 md:order-2">
          <div className="space-y-4 md:space-y-10 w-full flex flex-col items-center md:items-center text-center">
            <h2 className="text-2xl md:text-[50px] font-dm font-normal leading-none tracking-normal text-black w-full md:w-[610px]">
              Our Achievements
            </h2>
            <p className="text-sm md:text-[32px] font-manrope font-medium leading-none text-[#00000080] w-full md:w-[610px]">
              Numbers that reflect our commitment
            </p>
          </div>

          {/* HIDDEN ON DESKTOP, VISIBLE ON MOBILE BETWEEN DESC AND STATS */}
          <div className="md:hidden w-full max-w-[380px] h-[438px] relative rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] overflow-hidden order-2 mb-10">
            <img
              src={achievementsMain}
              alt="Achievements"
              className="absolute inset-0 w-full h-full object-cover block scale-[1.02] rounded-[30px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full max-w-[330px] mx-auto md:max-w-none md:flex md:flex-wrap md:justify-center md:gap-x-18 md:gap-y-8 md:w-[610px] order-4 md:order-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-[149px] h-[173px] md:w-[210px] md:h-[244px] bg-[#E6F0FA] rounded-[24.63px] md:rounded-[30px] shadow-[0px_3.28px_8.21px_0px_#0000001A] md:shadow-[0px_4px_10px_0px_#0000001A] flex flex-col items-center"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-[35px] h-[35px] md:w-14 md:h-14 object-contain mt-[25px] md:mt-10"
                />
                <div className="mt-[15px] md:mt-[20px] text-center flex flex-col items-center">
                  <h3 className="text-[22px] md:text-[32px] font-manrope font-semibold leading-none text-black">
                    {stat.value}
                  </h3>
                  <p className="text-[11px] md:text-base font-manrope font-medium leading-none text-[#00000080] text-center w-[100px] md:w-[131px] mx-auto mt-2.5 md:mt-3.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATIC IMAGE FOR DESKTOP ONLY */}
        <div className="hidden md:block w-[630px] h-[725px] relative ml-20 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] overflow-hidden order-1">
          <img
            src={achievementsMain}
            alt="Achievements"
            className="w-full h-full object-cover scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
