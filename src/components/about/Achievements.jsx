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
    <section className="w-full bg-transparent pt-0 pb-8 lg:pt-14 lg:pb-12">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-6 lg:px-0">
        {/* TOP: Content (Mobile order 1) */}
        <div className="w-full flex flex-col items-center lg:items-center space-y-6 lg:space-y-10 order-1 lg:order-2">
          <div className="space-y-4 lg:space-y-10 w-full flex flex-col items-center lg:items-center text-center">
            <h2 className="text-2xl lg:text-[50px] font-dm font-normal leading-none tracking-normal text-black w-full lg:w-[610px]">
              Our Achievements
            </h2>
            <p className="text-sm lg:text-[32px] font-manrope font-medium leading-none text-[#00000080] w-full lg:w-[610px]">
              Numbers that reflect our commitment
            </p>
          </div>

          {/* HIDDEN ON DESKTOP, VISIBLE ON MOBILE BETWEEN DESC AND STATS */}
          <div className="lg:hidden w-full max-w-[380px] h-[438px] relative rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] overflow-hidden order-2 mb-10">
            <img
              src={achievementsMain}
              alt="Achievements"
              className="absolute inset-0 w-full h-full object-cover block scale-[1.02] rounded-[30px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full max-w-[330px] mx-auto lg:max-w-none lg:flex lg:flex-wrap lg:justify-center lg:gap-x-18 lg:gap-y-8 lg:w-[610px] order-4 lg:order-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full h-[173px] lg:w-[210px] lg:h-[244px] bg-[#E6F0FA] rounded-[24.63px] lg:rounded-[30px] shadow-[0px_3.28px_8.21px_0px_#0000001A] lg:shadow-[0px_4px_10px_0px_#0000001A] flex flex-col items-center"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-[35px] h-[35px] lg:w-14 lg:h-14 object-contain mt-[25px] lg:mt-10"
                />
                <div className="mt-[15px] lg:mt-[20px] text-center flex flex-col items-center">
                  <h3 className="text-[22px] lg:text-[32px] font-manrope font-semibold leading-none text-black">
                    {stat.value}
                  </h3>
                  <p className="text-[11px] lg:text-base font-manrope font-medium leading-none text-[#00000080] text-center w-[100px] lg:w-[131px] mx-auto mt-2.5 lg:mt-3.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATIC IMAGE FOR DESKTOP ONLY */}
        <div className="hidden lg:block w-full max-w-[630px] h-[725px] relative ml-20 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] overflow-hidden order-1">
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
