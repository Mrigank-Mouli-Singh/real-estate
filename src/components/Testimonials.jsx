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

<div className="w-full py-16 px-4">
  <div className="
    flex flex-nowrap 
    md:flex-wrap md:justify-center md:gap-8
    overflow-x-auto snap-x snap-mandatory 
    pb-4 -m-4 md:m-0 md:pb-0
  ">
    {TESTIMONIALS.map((testimonial, index) => (
      <div key={index} className="flex-none px-4 md:px-0 snap-center">
        <TestimonialCard testimonial={testimonial} />
      </div>
    ))}
  </div>
</div>

  );
 };
 export default Testimonials;





