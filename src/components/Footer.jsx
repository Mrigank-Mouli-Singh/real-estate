import React from 'react';
import { 
  Building2, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';


const Footer  = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-black text-xl text-[#265BA6] 
            ">
              <h1>AMIT CONSTRUCTIONS</h1>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Your trusted partner in finding the perfect property. We make real estate simple and accessible.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h6 className="font-bold  text-[#265BA6]">Quick Links</h6>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-bold  text-[#265BA6]">Services</h6>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600">Buy Property</a></li>
              <li><a href="#" className="hover:text-blue-600">Sell Property</a></li>
              <li><a href="#" className="hover:text-blue-600">Construction Materials</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-bold  text-[#265BA6]">Contact Info</h6>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>123 Real Estate Ave, Property City, RE 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>info@amitconstruct.com</span>
              </li>
            </ul>
             </div>

        </div>

        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">© 2026 EstatePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
