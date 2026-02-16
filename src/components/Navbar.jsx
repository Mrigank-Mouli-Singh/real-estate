import React from 'react';
import logo from "../assets/logo.svg"
import { 
  Building2, 

} from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="absolute  top-6 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-6xl mx-auto bg-[#265BA6] text-white rounded-[50px] shadow-2xl py-3 px-8 flex justify-between items-center backdrop-blur-md bg-opacity-95">
        <div className="flex items-center gap-2 font-extrabold text-sm tracking-tight">
          <span><img src={logo} alt="Description"className='w-27 h-13' /></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a
           href="/home"
            className="text-white px-6 py-2 rounded-full font-bold shadow-sm border-2 border-transparent
             hover:text-[#2b67cc]  hover:bg-white hover:border-[#2b67cc]
             transition-all active:scale-95"
             >
            Home
             </a>
          
          <a
           href="/services"
            className="text-white px-6 py-2 rounded-full font-bold shadow-sm border-2 border-transparent
             hover:text-[#2b67cc]  hover:bg-white hover:border-[#2b67cc]
             transition-all active:scale-95"
             >
            Services
             </a>

          <a
           href="/about"
            className="text-white px-6 py-2 rounded-full font-bold shadow-sm border-2 border-transparent
             hover:text-[#2b67cc]  hover:bg-white hover:border-[#2b67cc]
             transition-all active:scale-95"
             >
            About us
             </a>

          <a
           href="/contact"
            className="text-white px-6 py-2 rounded-full font-bold shadow-sm border-2 border-transparent
             hover:text-[#2b67cc]  hover:bg-white hover:border-[#2b67cc]
             transition-all active:scale-95"
             >
            Contact Us
             </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
