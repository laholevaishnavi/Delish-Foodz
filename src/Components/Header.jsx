import React, { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.pixabay.com/photo/2022/07/31/20/37/fries-7356824_1280.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-lg text-gray-800">DelishFoodz</span>
        </Link>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-base text-gray-700">
          <span>{onlineStatus ? "Online 🟢" : "Offline 🔴"}</span>
          <Link to="/" className="hover:text-green-700 transition">Home</Link>
          <Link to="/about" className="hover:text-green-700 transition">About</Link>
          <Link to="/contact" className="hover:text-green-700 transition">Contact</Link>
          <Link to="/grocery" className="hover:text-green-700 transition">Grocery</Link>
          <Link to="/cart" className="hover:text-green-700 transition">Cart</Link>
          <button
            className="ml-2 px-4 py-1 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            onClick={() => setBtnValue(btnValue === "Login" ? "Logout" : "Login")}
          >
            {btnValue}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay with Gradient */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-white transition-all md:hidden
          bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 ">
          <button
            className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <span>{onlineStatus ? "Online 🟢" : "Offline 🔴"}</span>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-200">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-200">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-200">Contact</Link>
          <Link to="/grocery" onClick={() => setMenuOpen(false)} className="hover:text-yellow-200">Grocery</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-yellow-200">Cart</Link>
          <button
            className="mt-4 px-8 py-2 rounded bg-white text-green-700 font-semibold text-lg hover:bg-gray-100 transition"
            onClick={() => {
              setBtnValue(btnValue === "Login" ? "Logout" : "Login");
              setMenuOpen(false);
            }}
          >
            {btnValue}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
