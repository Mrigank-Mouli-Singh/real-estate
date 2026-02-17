import React from 'react';
import { Bed, Bath, Move, MapPin } from 'lucide-react';

import home1 from "../../assets/homeimage/image55.svg";
import home2 from "../../assets/homeimage/image59.svg";
import home3 from "../../assets/homeimage/image60.svg";


const PropertyCard = ({ 
  image, title, price, location, beds, baths, sqft, badge 
}) => (
  <div 
    className="group flex-shrink-0 bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col snap-center w-[320px] md:w-[416px] h-[550px] md:h-[709px]"
  >
    <div className="relative h-[340px] md:h-[476px] w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[16px]" 
      />
      {badge && (
        <span className="absolute top-4 right-4 bg-[#1E3A8A] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#1E3A8A] transition-colors line-clamp-1 ">
          {title}
        </h3>
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <span className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">{price}</span>
        </div>
        <div className="flex items-center text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
          <MapPin size={16} className="mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-100 flex justify-between">
        <div className="flex flex-col items-start">
          <div className="flex items-center text-gray-400 text-[10px] md:text-xs mb-1">
            <Bed size={14} className="mr-1" />
            <span>Beds</span>
          </div>
          <span className="font-semibold text-gray-700 text-xs md:text-base">{beds} BHK</span>
        </div>
        <div className="flex flex-col items-start border-x border-gray-100 px-4 md:px-6">
          <div className="flex items-center text-gray-400 text-[10px] md:text-xs mb-1">
            <Bath size={14} className="mr-1" />
            <span>Bath</span>
          </div>
          <span className="font-semibold text-gray-700 text-xs md:text-base">{baths} Bath</span>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center text-gray-400 text-[10px] md:text-xs mb-1">
            <Move size={14} className="mr-1" />
            <span>Area</span>
          </div>
          <span className="font-semibold text-gray-700 text-xs md:text-base">{sqft}</span>
        </div>
      </div>
    </div>
  </div>
);

const Properties = () => {
  const properties = [
    {
      image: home1,
      title: 'Modern Vintage Apartment',
      price: '₹1.4 Cr',
      location: 'Aya Nagar, New Delhi',
      beds: 3,
      baths: 3,
      sqft: '2,500 Sqft',
      badge: 'FOR SALE'
    },
    {
      image: home2,
      title: 'Luxurious Cottage House',
      price: '₹3.8 Cr',
      location: 'Whitefield, Bangalore',
      beds: 9,
      baths: 6,
      sqft: '9,200 Sqft',
      badge: 'EXCLUSIVE'
    },
    {
      image: home3,
      title: 'The Modern Aesthetic Estate',
      price: '₹2.7 Cr',
      location: 'Kochi, Kerala',
      beds: 5,
      baths: 4,
      sqft: '5,350 Sqft',
      badge: 'NEW'
    },
    {
      image: home1,
      title: 'Sunset Skyline Villa',
      price: '₹5.2 Cr',
      location: 'Gurugram, Haryana',
      beds: 4,
      baths: 4,
      sqft: '4,100 Sqft',
      badge: 'PREMIUM'
    },

    {
      image: home2,
      title: 'Sunset Skyline Villa',
      price: '₹4.2 Cr',
      location: 'Gurugram, Haryana',
      beds: 4,
      baths: 4,
      sqft: '4,100 Sqft',
      badge: 'PREMIUM'
    },

    {
      image: home3,
      title: 'Sunset Skyline Villa',
      price: '₹3.2 Cr',
      location: 'Gurugram, Haryana',
      beds: 4,
      baths: 4,
      sqft: '4,100 Sqft',
      badge: 'PREMIUM'
    }

  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Featured Properties
        </h2>
        <p className="text-gray-500 max-w-2xl text-lg mx-auto">
          Explore our handpicked selection of premium properties
        </p>
      </div>
      
      <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 pb-12 snap-x">
        {properties.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
