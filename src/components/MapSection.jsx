export default function MapSection() {
  return (
    <div className="flex flex-col items-center">
      {/* Section Title */}
      <h2 className="font-manrope font-medium text-[32px] leading-[32px] text-black mb-6 text-center">
        Find us here
      </h2>

      {/* Map Card */}
      <div
        className="w-[628px] h-[517px] rounded-[20px] overflow-hidden"
        style={{
          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src="/images/map-image.png"   // place inside public folder
          alt="Office Location Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
