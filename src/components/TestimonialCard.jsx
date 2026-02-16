


// import bluecard from "../assets/bluecard.svg";
// const TestimonialCard = ({ testimonial }) => {
//   // REPLACE THIS PATH with the actual location of your SVG in your project

//   return (
//     <div className="flex flex-col min-w-[85vw] sm:min-w-0 w-full flex-shrink-0 snap-center relative h-[400px] sm:h-[520px]">
      
//       {/* Background Image Layer */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={bluecard} 
//           alt="Card Background" 
//           className="w-full h-full object-fill pointer-events-none"
//         />
//       </div>

//       {/* Text Overlay Layer */}
//       <div className="relative z-10 flex flex-col h-full p-8 sm:p-10 text-white">
//         <div className="mb-4">
//           <h3 className="text-xl sm:text-lg font-bold mb-4 leading-tight tracking-wide">
//             {testimonial.headline}
//           </h3>
//           <p className="text-blue-50 text-sm sm:text-xs leading-relaxed opacity-90 font-medium line-clamp-6">
//             {testimonial.content}
//           </p>
//         </div>

//         {/* Name at bottom right */}
//         <div className="mt-auto self-end font-bold text-base sm:text-sm tracking-tight mb-8">
//           {testimonial.name}
//         </div>
//       </div>

//       {/* Avatar Section - Positioned relative to the card container */}
//       <div className="absolute left-6 -bottom-2 sm:left-5 lg:-bottom-2 z-20">
//         <div className="p-0.5 bg-white rounded-full shadow-lg">
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-16 h-16 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;



import bluecard from "../assets/bluecard.svg";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[340px] h-[400px] flex-shrink-0 relative"> {/* FIXED width/height - no responsive changes */}
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bluecard} 
          alt="Card Background" 
          className="w-full h-full object-fill pointer-events-none"
        />
      </div>

      {/* Text - FIXED sizes/padding */}
      <div className="relative z-10 flex flex-col h-full p-8 text-white">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-4 mt-6 leading-tight tracking-wide">
            {testimonial.headline}
          </h3>
          <p className="text-blue-50 text-sm leading-relaxed opacity-90 font-medium"> {/* Removed line-clamp */}
            {testimonial.content}
          </p>
        </div>

        <div className="mt-8 self-end font-bold text-base tracking-tight mb-8">
          {testimonial.name}
        </div>
      </div>

      {/* Avatar FIXED close to card */}
      <div className="absolute left-6 -bottom-2 z-20">
        <div className="p-0.5 bg-white rounded-full shadow-lg">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;





