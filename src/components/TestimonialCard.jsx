
// const TestimonialCard = ({ testimonial }) => {
//   return (
//     <div className="flex flex-col min-w-[85vw] md:min-w-0 w-full flex-shrink-0 snap-center">
//       {/* Speech Bubble Container */}
//       <div className="relative bg-[#2a5ca8] text-white p-7 md:p-8 rounded-[2.5rem] flex flex-col justify-between shadow-lg h-[320px] md:h-[360px]">
//    <div>
//           {/* Headline */}
//           <h3 className="text-lg md:text-xl font-bold mb-4 leading-tight tracking-tight">
//             {testimonial.headline}
//           </h3>
          
//           {/* Content Body */}
//           <p className="text-blue-50 text-[14px] md:text-[15px] leading-relaxed opacity-90 font-medium line-clamp-6">
//             {testimonial.content}
//           </p>
//         </div>
        
//         {/* Name at bottom right */}
//         <div className="mt-4 self-end font-bold text-sm md:text-base">
//           {testimonial.name}
//         </div>

//         {/* Custom Tail SVG - Scoop style */}
//         <div className="absolute -bottom-8 left-8 w-12 h-12 pointer-events-none">
//           <svg
//             viewBox="0 0 100 100"
//             className="w-full h-full text-[#2a5ca8] fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M0 0 C 0 30, 30 30, 30 80 C 30 30, 60 30, 60 0 L 0 0 Z" />
//           </svg>
//         </div>
//       </div>

//       {/* Avatar Section - Overlapping the card */}
//       <div className="ml-8 -mt-10 relative z-10">
//         <div className="inline-block p-1 bg-white rounded-full shadow-2xl">
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;















// import bluecard from "../assets/bluecard.svg?react";

// const TestimonialCard = ({ testimonial }) => {
//   return (
//     <div className="flex flex-col min-w-[85vw] md:min-w-0 w-full flex-shrink-0 snap-center relative">
//       {/* The Speech Bubble Shape */}
//       <div className="relative bg-[#2b59a2] text-white p-7 md:p-8 rounded-[2rem] flex flex-col justify-between shadow-xl min-h-[340px] md:min-h-[380px] z-10 overflow-hidden">
//         {/* Note: If you have a specific background image for the card, you can add it here as an <img> or background-image */}
//         <bluecard className="w-12 h-12" />
        
//         <div className="relative z-20">
//           <h3 className="text-xl md:text-lg font-bold mb-5 leading-tight tracking-wide">
//             {testimonial.headline}
//           </h3>
//           <p className="text-blue-50 text-sm md:text-xs leading-relaxed opacity-90 font-medium mb-8 line-clamp-6">
//             {testimonial.content}
//           </p>
//         </div>

//         {/* Name at bottom right */}
//         <div className="mt-auto self-end font-bold text-base md:text-sm tracking-tight z-20">
//           {testimonial.name}
//         </div>

//         {/* Tail / Scoop SVG - Styled to look exactly like the image tail */}
//         <div className="absolute -bottom-[2px] left-0 w-24 h-24 pointer-events-none z-10">
//           <svg
//             viewBox="0 0 100 100"
//             className="w-full h-full text-[#2b59a2] fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="none"
//           >
//             {/* Custom path for the distinct scoop/tail shape */}
//             <path d="M0 0 L 100 0 L 100 100 C 100 100, 35 100, 30 70 C 25 40, 0 45, 0 100 L 0 0 Z" />
//           </svg>
//         </div>
//       </div>

//       {/* Avatar Section - Tucked into the scoop */}
//       <div className="absolute left-6 -bottom-6 md:left-5 md:-bottom-5 z-20">
//         <div className="p-0.5 bg-white rounded-full shadow-lg">
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-16 h-16 md:w-14 md:h-14 rounded-full object-cover border-2 border-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;










import bluecard from "../assets/bluecard.svg";
const TestimonialCard = ({ testimonial }) => {
  // REPLACE THIS PATH with the actual location of your SVG in your project

  return (
    <div className="flex flex-col min-w-[85vw] sm:min-w-0 w-full flex-shrink-0 snap-center relative h-[400px] sm:h-[520px]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bluecard} 
          alt="Card Background" 
          className="w-full h-full object-fill pointer-events-none"
        />
      </div>

      {/* Text Overlay Layer */}
      <div className="relative z-10 flex flex-col h-full p-8 sm:p-10 text-white">
        <div className="mb-4">
          <h3 className="text-xl sm:text-lg font-bold mb-4 leading-tight tracking-wide">
            {testimonial.headline}
          </h3>
          <p className="text-blue-50 text-sm sm:text-xs leading-relaxed opacity-90 font-medium line-clamp-6">
            {testimonial.content}
          </p>
        </div>

        {/* Name at bottom right */}
        <div className="mt-auto self-end font-bold text-base sm:text-sm tracking-tight mb-8">
          {testimonial.name}
        </div>
      </div>

      {/* Avatar Section - Positioned relative to the card container */}
      <div className="absolute left-6 -bottom-2 sm:left-5 lg:-bottom-2 z-20">
        <div className="p-0.5 bg-white rounded-full shadow-lg">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;








