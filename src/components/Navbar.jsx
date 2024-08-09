import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const navItems = [
    { link: "Über mich", path: "#über" },
    { link: "Portfolio", path: "#portfolio" },
    { link: "Kontakt", path: "#kontakt" },
  ];

  return (
    <nav className="h-[80px] max-w-screen-xl mx-auto border-slate-800">
      {/* Mobile and Desktop Navigation Container */}
      <div className="h-full flex justify-between items-center px-4 py-2 z-50">
        <div className="flex items-center space-x-4 text-2xl tracking-wider">
          <h1 className="text-customGray">D.K</h1>
        </div>
        {/* Mobile Navigation Icon */}
        <div className="relative md:hidden" onClick={toggleMobileMenu}>
          {!mobileMenu ? (
            <FaBars className="bg-customDarkTurqoise text-4xl text-customBackground p-2 rounded-md" />
          ) : (
            <FaTimes className="bg-customDarkTurqoise text-4xl text-customBackground p-2 rounded-md" />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden h-full md:flex items-center space-x-12 tracking-wider">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="text-customGray hover:text-customLightTurqoise"
              >
                <span className="font-bold hover:border-b-2 border-customLightTurqoise">
                  {item.link}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block p-2 px-4 border-2 border-customDarkTurqoise text-customLightTurqoise">
          <a href="#kontakt">CV</a>
        </button>
      </div>

      {/* Mobile Navigation Container */}
      <div
        className={
          mobileMenu ? "absolute w-full z-30 bg-customBackground" : "hidden"
        }
      >
        <ul className="h-full flex flex-col border border-slate-800">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="border border-slate-800 text-customGray text-xl p-4 leading-relaxed px-8"
            >
              <a
                href={item.path}
                onClick={toggleMobileMenu}
              >
                <span className="">{item.link}</span>
              </a>
            </li>
          ))}
          <button className="p-2 px-4 border-2 border-customDarkTurqoise text-customLightTurqoise">
            <a href="#kontakt">CV</a>
          </button>
        </ul>
      </div>

      <div
        className={`absolute w-full h-screen bg-black bg-opacity-50 z-20 ${
          !mobileMenu ? `hidden` : ``
        } `}
      ></div>
    </nav>
  );
};

export default Navbar;
