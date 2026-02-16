import mapImage from "../assets/map-image.svg";

export default function MapSection() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Section Title */}
      <h2 className="font-manrope font-medium text-[28px] lg:text-[40px] leading-tight text-black mb-6 text-center">
        Find us here
      </h2>

      {/* Map Card */}
      <div
        className="w-full max-w-[628px] aspect-[628/517] rounded-[20px] overflow-hidden shadow-lg"
        style={{
          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={mapImage}
          alt="Office Location Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
