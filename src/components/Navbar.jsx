import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const itemsRef = useRef([]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === location.pathname);
    const activeIndex = index === -1 ? 0 : index;

    // Safety check: Fixes the 'undefined' error from line 27
    const activeElement = itemsRef.current?.[activeIndex];
    
    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <div className="w-full flex justify-center pt-6 font-['Manrope']">
      <nav 
        className="relative w-[1280px] h-[80px] bg-[#265BA6] rounded-[100px] flex items-center px-10 shadow-[0px_4px_30px_rgba(96,165,250,0.5)]"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        
        {/* LOGO SECTION - Width fixed to allow centering */}
        <div className="w-[250px] flex-shrink-0">
          <img 
            src="/images/logo.png" 
            alt="Amit Construction" 
            className="h-[50px] w-auto object-contain" 
          />
        </div>

        {/* CENTERED NAV GROUP (609px Frame Width) */}
        <div className="flex-grow flex justify-center">
          <div className="relative flex items-center justify-between w-[609px]">
            
            {/* SLIDING WHITE PILL */}
            <div
              className="absolute h-[52px] bg-white rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />

            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                ref={(el) => (itemsRef.current[index] = el)}
                // INCREASED PADDING (px-10) here makes the pill wider on both sides
                className={({ isActive }) =>
                  `relative z-10 px-4 py-2 font-medium text-[24px] transition-colors duration-300 whitespace-nowrap ${
                    isActive ? "text-[#0047AB]" : "text-white hover:text-blue-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* BALANCING SPACER */}
        <div className="w-[250px] flex-shrink-0"></div>
      </nav>
    </div>
  );
}