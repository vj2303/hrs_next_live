import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Blogs", to: "/blogs" },
    { name: "About us", to: "/about" },
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const location = useLocation();

  return (
    <>
      <nav className="fixed bg-white z-50 py-3 sm:px-[120px] cursor-pointer w-full">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <img className="h-[70px] w-[70px]" src='/Assets/logo2.png' alt="Logo" />
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <Link
                  to={item.to}
                  className={`text-[#737373] text-[16px] leading-[24px] font-bold ${location.pathname === item.to ? 'border-b-2 border-black text-black' : 'hover:border-black hover:text-black'}`}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center gap-[5px] items-center">
              <Link to="#" className="py-2 px-3 font-bold text-[16px] leading-[24px]">
                Contact Us
              </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link to={item.to} onClick={toggleNavbar}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <Link to="#" className="py-2 px-3 border rounded-md">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
