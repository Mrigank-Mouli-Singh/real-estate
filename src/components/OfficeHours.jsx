export default function OfficeHours() {
  return (
    <div
      className="
        w-full 
        
        /* ✅ Horizontal size now matches MapSection */
        max-w-[628px]
        mx-auto
        
        /* Height: Portrait -> Landscape -> Desktop */
        h-[129px] 
        landscape:h-[180px] 
        lg:h-[228px]

        /* Radius & Styling */
        rounded-[16px] 
        lg:rounded-[20px] 
        bg-white 
        border-t-[8px] 
        border-t-[#0047AB]
        mt-8 
        flex flex-col
        
        /* Padding: Portrait -> Landscape -> Desktop */
        pt-[24px] 
        pr-[16px] 
        pb-[24px] 
        pl-[16px] 
        
        landscape:p-[20px] 
        lg:p-[24px]
        
        transition-all duration-300
      "
      style={{
        boxShadow: "0px 4px 20px rgba(96,165,250,0.20)",
        opacity: 1,
      }}
    >
      {/* TITLE */}
      <h4
        className="
          font-manrope 
          font-semibold 
          text-[#0047AB] 
          leading-[100%]

          text-[18px] 
          landscape:text-[24px] 
          lg:text-[32px] 

          mb-[6px] 
          landscape:mb-[16px] 
          lg:mb-[24px]

          landscape:text-center 
          lg:text-left
        "
      >
        Office Hours
      </h4>

      {/* HOURS CONTAINER */}
      <div className="flex flex-col gap-[6px] landscape:gap-[16px] lg:gap-[24px]">
        
        {/* Monday - Friday */}
        <div className="flex flex-row justify-between items-center">
          <span className="font-manrope font-medium text-black/50 leading-[100%] text-[12px] landscape:text-[18px] lg:text-[24px]">
            Monday - Friday:
          </span>
          <span className="font-manrope font-medium text-black/50 text-right leading-[100%] text-[12px] landscape:text-[18px] lg:text-[24px]">
            9:00 AM - 6:00 PM
          </span>
        </div>

        {/* Saturday */}
        <div className="flex flex-row justify-between items-center">
          <span className="font-manrope font-medium text-black/50 leading-[100%] text-[12px] landscape:text-[18px] lg:text-[24px]">
            Saturday:
          </span>
          <span className="font-manrope font-medium text-black/50 text-right leading-[100%] text-[12px] landscape:text-[18px] lg:text-[24px]">
            10:00 AM - 4:00 PM
          </span>
        </div>

      </div>
    </div>
  );
}
