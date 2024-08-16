import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
import haloLogo from '../assets/halologo.png';

const services = [
  {
    title: "Discovery",
    description:
      "To kickstart creative ideation, we begin our product journey with the discovery phase.",
    items: [],
  },
  {
    title: "Design",
    items: ["UI/UX design", "Web design", "Mobile app design", "Landing page design"],
  },
  {
    title: "Development",
    items: ["Web development", "Software development", "CMS development", "No-code development"],
  },
  {
    title: "Marketing",
    items: ["Branding", "Content marketing", "Pitch deck design", "SEO"],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#0e0e30] text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center border-t border-b border-white mt-2">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-bold">
            <img src={haloLogo } alt="logo"/>
          </div>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex space-x-8 items-center">
          {/* Services with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-orange-400 flex items-center space-x-1"
            >
              <span>SERVICES</span>
              <AiOutlineArrowDown className={`transform transition-transform ${isDropdownOpen ? "rotate-90" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute flex left-[-400px] mt-7 w-auto bg-white text-black shadow-lg rounded-lg z-10">
                <div className="p-4 gap-4 flex ">
                  {services.map((service, index) => (
                    <div key={index} className="mb-4 p-4 rounded-lg bg-gray-200 w-64" style={{borderRadius: "0px 28% 0 0"}}>
                      <div className="flex items-center justify-between mr-2 mb-2">
                        <div className="flex items-center">
                          {/* Placeholder for icons */}
                          <div className="bg-blue-600 text-white rounded-full p-2">
                            <span className="text-xl w-auto">🔹</span>
                          </div>
                          <div className="bg-white text-black rounded-full p-2">
                            <span className="text-xl w-auto"><AiOutlineArrowRight /></span>
                          </div>
                        </div>
                      </div>
                      <h3 className="ml-2 text-lg font-semibold">{service.title}</h3>
                      <div className="bg-gray-500 h-0.5 mb-3"></div>
                      {service.description && (
                        <h3 className="text-sm text-gray-600 mb-4">{service.description}</h3>
                      )}
                      {service.items.length > 0 && (
                        <ul className="text-xl text-gray-600 ">
                          {service.items.map((item, i) => (
                            <li className="hover:text-blue-700 hover:underline" key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-orange-400">PROJECTS</a>
          <a href="#" className="hover:text-orange-400">OUR PROCESS</a>
          <a href="#" className="hover:text-orange-400">OPEN SOURCE</a>
          <a href="#" className="hover:text-orange-400">OUR BLOG</a>
          <button className="ml-4 bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2">
            <span>CONTACT US</span>
            <span className="text-blue-600">✏️</span>
          </button>
        </div>

        {/*  Icon for smaller screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0e0e30] text-white p-6 transition-transform transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-lg font-semibold">HALO LAB</span>
          <button onClick={toggleSidebar}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <a href="#" className="block py-2 px-4 hover:text-gray-400">SERVICES</a>
        <a href="#" className="block py-2 px-4 hover:text-gray-400">PROJECTS</a>
        <a href="#" className="block py-2 px-4 hover:text-gray-400">OUR PROCESS</a>
        <a href="#" className="block py-2 px-4 hover:text-gray-400">OPEN SOURCE</a>
        <a href="#" className="block py-2 px-4 hover:text-gray-400">OUR BLOG</a>
        <button className="w-full mt-4 bg-white text-black px-4 py-2 rounded-full flex items-center justify-center space-x-2">
          <span>CONTACT US</span>
          <span className="text-blue-600">✏️</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
