import React from 'react';
import TestimonialCard from './TestimonialCard.jsx';


const TESTIMONIALS = [
  {
    id: '1',
    name: 'Vikram Seth',
    headline: '"Handled everything with precision and care."',
    content: 'Amit Construction listened carefully to our needs and helped us make decisions that felt right, not rushed Found our dream home in record time.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Anjali Nair',
    headline: '"Found our dream home in record time."',
    content: 'The search filters on Amit construction made it so easy to narrow down exactly what we wanted. We went from browsing to a confirmed viewing in less than 48 hours.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Rohan Mehra',
    headline: '"Professional, transparent, and reliable."',
    content: 'Navigating the paperwork was the part I dreaded most, but the team made the entire closing process feel seamless.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Sneha Kapoor',
    headline: '"A stress-free experience from start to finish."',
    content: 'I highly recommend Amit Construction for their local market insights. Their data gave us the confidence we needed to make a competitive offer without overpaying.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop'
  }
];


const Testimonials = () => {
  return (
    <div className="py-32 px-6  max-w-6xl mx-auto  flex items-center bg-white py-12 px-4 md:px-6">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* 
          Mobile: flex with horizontal scroll, snap-mandatory
          Desktop: 4-column grid
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 md:gap-10 no-scrollbar snap-x snap-mandatory px-4 md:px-0 scroll-smooth items-start">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* Extra space for mobile scroll padding */}
          <div className="min-w-[20px] md:hidden flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;







