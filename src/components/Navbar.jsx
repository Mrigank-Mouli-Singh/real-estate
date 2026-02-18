import { NavLink, useLocation } from "react-router-dom";
import { useLayoutEffect, useState, useRef } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const location = useLocation();
  const itemsRef = useRef([]);
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  useLayoutEffect(() => {
    const updatePillPosition = () => {
      const index = navItems.findIndex(
        (item) => item.path === location.pathname,
      );

      const activeIndex = index === -1 ? 0 : index;
      const activeElement = itemsRef.current[activeIndex];

      if (!activeElement) return;

      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    };

    updatePillPosition();
    window.addEventListener("resize", updatePillPosition);

    return () => {
      window.removeEventListener("resize", updatePillPosition);
    };
  }, [location.pathname]);

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 flex justify-center py-2 lg:py-3 px-4">
      <nav
        className="relative w-full lg:w-[1280px]
                   h-[45px] lg:h-[80px]
                   bg-[#265BA6] rounded-full
                   flex items-center
                   px-3 lg:px-10
                   shadow-[0px_4px_30px_rgba(96,165,250,0.5)]"
        style={{ backdropFilter: "blur(20px)" }}
      >
        {/* Logo */}
        <div className="w-auto lg:w-[250px] flex-shrink-0">
          <img
            src={logo}
            alt="Amit Construction"
            className="h-[20px] lg:h-[50px] w-auto object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="flex-grow flex gap-2 justify-end lg:justify-center">
          <div
            className="relative flex items-center
                       justify-between lg:justify-center
                       gap-0 lg:gap-6
                       w-full max-w-[220px] lg:w-auto"
          >
            {/* Sliding Pill */}
            <div
              className="absolute
                         h-[30px] lg:h-[52px]
                         bg-white rounded-full
                         transition-all duration-300 ease-in-out"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                ref={(el) => (itemsRef.current[index] = el)}
                className={({ isActive }) =>
                  `relative z-10
                   px-2 lg:px-4
                   py-1 lg:py-2
                   font-medium
                   text-[9px] lg:text-[20px]
                   transition-colors duration-300 whitespace-nowrap ${
                     isActive
                       ? "text-[#0047AB]"
                       : "text-white hover:text-blue-100"
                   }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop Spacer */}
        <div className="hidden lg:block w-[250px] flex-shrink-0" />
      </nav>
    </div>
  );
}
