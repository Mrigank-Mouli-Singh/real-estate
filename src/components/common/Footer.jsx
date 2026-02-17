import { Link } from "react-router-dom";

import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import locationIcon from "../../assets/icons/location.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import mailIcon from "../../assets/icons/mail.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-4 md:pt-14 pb-10 md:pb-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* TOP SECTION */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-16">
          
          {/* COLUMN 1: BRAND & SOCIALS */}
          <div className="space-y-4 md:space-y-5 flex flex-col items-start md:items-start text-left md:text-left">
            <h2 className="text-xl md:text-[32px] font-dm font-normal leading-none tracking-normal text-[#265BA6] w-[203px] md:w-auto md:max-w-[325px]">
              AMIT CONSTRUCTIONS
            </h2>

            <p className="font-manrope font-normal md:font-medium text-[10px] md:text-base leading-normal tracking-normal text-[#686868] w-[295px] md:max-w-[334px]">
              Your trusted partner in finding the perfect property. We make real
              estate simple and accessible.
            </p>

            {/* Social Icons (unchanged design) */}
            <div className="flex items-center gap-3 md:gap-4 mt-0 md:mt-8 w-[123px] md:w-auto">
              <a
                href="#"
                className="w-[23px] h-[23px] md:w-7.5 md:h-7.5 border border-[#D3D3D3] rounded-[5px] md:rounded-lg flex items-center justify-center"
              >
                <img src={facebook} alt="Facebook" className="w-3 h-3 md:w-4 md:h-4" />
              </a>

              <a
                href="#"
                className="w-[23px] h-[23px] md:w-[30px] md:h-[30px] border-[1px] border-[#D3D3D3] rounded-[5px] md:rounded-[8px] flex items-center justify-center"
              >
                <img src={twitter} alt="Twitter" className="w-3 h-3 md:w-4 md:h-4" />
              </a>

              <a
                href="#"
                className="w-[23px] h-[23px] md:w-[30px] md:h-[30px] border-[1px] border-[#D3D3D3] rounded-[5px] md:rounded-[8px] flex items-center justify-center"
              >
                <img src={linkedin} alt="Linkedin" className="w-3 h-3 md:w-4 md:h-4" />
              </a>

              <a
                href="#"
                className="w-[23px] h-[23px] md:w-[30px] md:h-[30px] border-[1px] border-[#D3D3D3] rounded-[5px] md:rounded-[8px] flex items-center justify-center"
              >
                <img src={instagram} alt="Instagram" className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* WRAPPER FOR REMAINING 3 COLUMNS ON MOBILE */}
          <div className="flex flex-row md:contents gap-x-6 md:gap-x-0 gap-y-6 items-start">
            
            {/* COLUMN 2: QUICK LINKS */}
            <div className="flex flex-col items-start md:items-start text-left md:text-left lg:ml-16">
              <h3 className="text-xs md:text-xl font-manrope font-normal leading-none text-[#0047AB] md:text-[#265BA6] mb-4 md:mb-6 whitespace-nowrap md:whitespace-normal">
                Quick Links
              </h3>

              <ul className="space-y-2 md:space-y-4 font-manrope font-normal text-[10px] md:text-base leading-none text-[#686868]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: SERVICES */}
            <div className="flex flex-col items-start md:items-start text-left md:text-left">
              <h3 className="text-xs md:text-xl font-manrope font-normal leading-none text-[#0047AB] md:text-[#265BA6] mb-4 md:mb-6 whitespace-nowrap md:whitespace-normal">
                Services
              </h3>

              <ul className="space-y-2 md:space-y-4 font-manrope font-normal text-[10px] md:text-base leading-none text-[#686868]">
                <li>
                  <Link to="/contact?subject=buy">Buy Property</Link>
                </li>
                <li>
                  <Link to="/contact?subject=sell">Sell Property</Link>
                </li>
                <li>
                  <Link to="/contact?subject=materials">
                    Construction Materials
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: CONTACT INFO */}
            <div className="flex flex-col items-start md:items-start text-left md:text-left">
              <h3 className="text-xs md:text-xl font-manrope font-normal leading-none text-[#0047AB] md:text-[#265BA6] mb-4 md:mb-6 whitespace-nowrap md:whitespace-normal">
                Contact Info
              </h3>

              <ul className="space-y-1 md:space-y-6 font-manrope font-normal text-[10px] md:text-base leading-normal text-[#686868] w-full">
                <li className="flex items-start gap-1 md:gap-3">
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="shrink-0 w-[15px] h-[15px] md:w-[27px] md:h-[27px]"
                  />
                  <span>123 Real Estate Ave, Property City, RE 12345</span>
                </li>

                <li className="flex items-start gap-1 md:gap-3">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="shrink-0 w-[15px] h-[15px] md:w-[27px] md:h-[27px]"
                  />
                  <span>+1 (555) 123-4567</span>
                </li>

                <li className="flex items-start gap-1 md:gap-3">
                  <img
                    src={mailIcon}
                    alt="Mail"
                    className="shrink-0 w-[15px] h-[15px] md:w-[27px] md:h-[27px]"
                  />
                  <span>info@amitconstruct.com</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="w-full border-t-[0.5px] md:border-t border-black md:border-gray-200 pt-4 md:pt-8 flex justify-center text-center">
          <p className="font-manrope font-normal text-[10px] md:text-base leading-none text-[#7B7B7B] md:whitespace-nowrap">
            © 2026 EstatePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
