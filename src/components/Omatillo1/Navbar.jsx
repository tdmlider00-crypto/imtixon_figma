import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#181818] text-white z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide lowercase">
          aperture
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Business areas
          </a>
          <a href="#" className="hover:text-white transition">
            Featured images
          </a>
          <a href="#" className="hover:text-white transition">
            Gear cage
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>

          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Get template
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-3xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;