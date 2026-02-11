export default function OfficeHours() {
  return (
    <div
      className="w-[628px] rounded-[20px] bg-white px-8 py-7 flex flex-col mt-8"
      style={{
        borderTop: "8px solid #0047AB",
        boxShadow: "0px 4px 20px rgba(96,165,250,0.20)",
      }}
    >
      {/* TITLE */}
      <h4 className="font-manrope font-semibold text-[32px] leading-[100%] text-[#0047AB] mb-2">
        Office Hours
      </h4>

      {/* HOURS */}
      <div className="flex flex-col gap-7">
        
        {/* Monday - Friday */}
        <div className="flex justify-between items-center">
          <span className="font-manrope font-medium text-[24px] text-black/50">
            Monday - Friday:
          </span>
          <span className="font-manrope font-medium text-[24px] text-black/50 text-right">
            9:00 AM - 6:00 PM
          </span>
        </div>

        {/* Saturday */}
        <div className="flex justify-between items-center">
          <span className="font-manrope font-medium text-[24px] text-black/50">
            Saturday:
          </span>
          <span className="font-manrope font-medium text-[24px] text-black/50 text-right">
            10:00 AM - 4:00 PM
          </span>
        </div>

      </div>
    </div>
  );
}
