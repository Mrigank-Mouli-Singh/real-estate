
import React from 'react';
import image1 from "../../assets/homeimage/image88.svg";
import image2 from "../../assets/homeimage/image89.svg";
import image3 from "../../assets/homeimage/image90.svg";




const MaterialSupply = () => {
  const images = [
    { src: image1, alt: 'Concrete pouring' },
    { src: image2, alt: 'Heavy machinery' },
    { src: image3, alt: 'Bricklaying' },
    { src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', alt: 'Construction Site' },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Material Supply & Support</h2>
        <p className="text-gray-500 max-w-2xl text-lg mx-auto">
          Built on Quality. Delivered with Trust.
        </p>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-6 md:gap-8 px-6 pb-4 snap-x">
        {images.map((img, i) => (
          <div key={i} className="group relative flex-shrink-0 w-[260px] md:w-[416px] aspect-[4/5] rounded-[16px] overflow-hidden snap-center">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialSupply;
