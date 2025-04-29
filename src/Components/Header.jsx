import React, { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnValue, setbtnValue] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="border-0 shadow-md bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 shadow-slate-400 mb-10 relative z-50">
      <div className="flex justify-between items-center px-4 md:px-10 h-20 md:h-32">
        <div className="logoContainer">
          <img
            className="logo w-16  md:w-32 md:h-32"
src="https://cdn.pixabay.com/photo/2022/07/31/20/37/fries-7356824_1280.png"            alt="Logo"
          />
        </div>
        <button
          className="md:hidden block text-green-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-8 w-8 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
       <nav
  className={`NavIcons fixed inset-0 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 text-white  md:static md:w-auto md:bg-transparent transition-transform duration-300 ease-in-out transform ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0 md:block z-50`}
>

          <button
            className="lg:hidden absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex  flex-col md:flex-row md:items-center font-medium list-none justify-center md:h-full p-10 md:p-0 space-y-8 md:space-y-0 md:space-x-6 text-2xl md:text-base">
            <li className=" md:mx-2 " onClick={() => setMenuOpen(false)}>
              {onlineStatus ? "Online : 🟢" : "Offline : 🔴"}
            </li>
            <li className="md:mx-2 cursor-pointer hover:text-green-700 " onClick={() => setMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li className="md:mx-2  hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
              <Link to="/about">About Us</Link>
            </li>
            <li className="md:mx-2 hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="md:mx-2 hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="md:mx-2 hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
              <Link to="/cart">Cart</Link>
            </li>
            <li className="md:mx-2">
              <button
                className="login bg-transparent font-semibold  text-green-700  "
                onClick={() => {
                  btnValue === "Login" ? setbtnValue("Logout") : setbtnValue("Login");
                  setMenuOpen(false);
                }}
              >
                {btnValue}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
