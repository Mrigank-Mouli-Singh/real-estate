import team1 from "../../assets/images/team-1.png";
import team2 from "../../assets/images/team-2.png";
import team3 from "../../assets/images/team-3.png";
import team4 from "../../assets/images/team-4.png";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    experience: "15+ years of real estate experience",
    image: team1,
  },
  {
    name: "Michael Chen",
    role: "Head of Sale",
    experience: "Specializes in luxury properties",
    image: team2,
  },
  {
    name: "Emma Williams",
    role: "Property Manager",
    experience: "Expert in property management",
    image: team3,
  },
  {
    name: "David Rodriguez",
    role: "Investment Advisor",
    experience: "Real estate investment specialist",
    image: team4,
  },
];

const TeamSection = () => {
  return (
    <section className="w-full pt-0 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-4 mb-10 md:mb-20">
          <h2 className="text-2xl md:text-[50px] font-dm font-normal leading-none text-black text-center w-full md:w-[335px] mx-auto">
            Meet Our Team
          </h2>
          <p className="text-sm md:text-[32px] font-manrope font-medium leading-none text-[#00000080] text-center w-full md:w-[851px] mx-auto mt-2">
            Experienced professionals dedicated to your success
          </p>
        </div>

        {/* TEAM GRID - Staggered Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 md:gap-16 items-start justify-items-center mt-10 md:mt-18">
          {team.map((member, index) => (
            <div
              key={index}
              className={`
                relative
                w-[183px] h-[303px] md:w-[302px] md:h-[500px] 
                rounded-[60.5px] md:rounded-[100px] 
                border-[1.2px] md:border-2 border-[#0047AB] 
                shadow-[0px_4px_15px_0px_#0000001A]
                ${
                  index === 0
                    ? "bg-[#E6F0FA]"
                    : index === 1
                      ? "bg-white"
                      : index === 2
                        ? "bg-white md:bg-[#E6F0FA]"
                        : "bg-[#E6F0FA] md:bg-white"
                } 
                flex flex-col items-center 
                pt-6 md:pt-10 overflow-hidden 
                ${index === 1 || index === 3 ? "mt-16 md:mt-0" : ""}
                ${index % 2 !== 0 ? "lg:mt-16" : ""}
              `}
            >
              {/* Top Content */}
              <div className="z-10 px-2 md:px-4 space-y-1 md:space-y-2 text-center">
                <h4 className="text-sm md:text-2xl font-manrope font-bold leading-none text-black text-center w-[150px] md:w-[250px] mx-auto">
                  {member.name}
                </h4>
                <p className="text-[11px] md:text-base font-manrope font-semibold leading-none text-black text-center w-[120px] md:w-[180px] mx-auto mt-2 md:mt-3.5">
                  {member.role}
                </p>
                <p className="text-[10px] md:text-base font-manrope font-medium leading-none text-[#00000080] text-center w-[175px] md:w-[259px] mx-auto mt-2 md:mt-3.5">
                  {member.experience}
                </p>
              </div>

              {/* Bottom Image Container */}
              <div className="absolute top-[121px] md:top-[199px] w-[183px] h-[183px] md:w-[302px] md:h-[302px] rounded-[60.5px] md:rounded-[100px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
