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
        <iframe
          src="https://www.google.com/maps?q=709-A,+Pratap+Nagar,+C.A.D.+Circle,+Dadabari,+Kota,+324009&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Office Location Map"
        ></iframe>
      </div>

    </div>
  );
}
