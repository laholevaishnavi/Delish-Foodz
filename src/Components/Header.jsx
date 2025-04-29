// import React, { useState } from "react";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [btnValue, setbtnValue] = useState("Login");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const onlineStatus = useOnlineStatus();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="border-0 shadow-md bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 shadow-slate-400 mb-10 relative z-50">
//       <div className="flex justify-between items-center px-4 md:px-10 h-20 md:h-32">
//         <div className="logoContainer">
//           <img
//             className="logo w-16  md:w-32 md:h-32"
// src="https://cdn.pixabay.com/photo/2022/07/31/20/37/fries-7356824_1280.png"            alt="Logo"
//           />
//         </div>
//         <button
//           className="md:hidden block text-green-900 focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-8 w-8 fill-current text-white"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {menuOpen ? (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
//               />
//             ) : (
//               <path
//                 fillRule="evenodd"
//                 d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
//               />
//             )}
//           </svg>
//         </button>
//        <nav
//   className={`NavIcons fixed inset-0 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 text-white  md:static md:w-auto lg:bg-transparent transition-transform duration-300 ease-in-out transform ${
//     menuOpen ? "translate-x-0" : "-translate-x-full"
//   } md:translate-x-0 md:block z-50`}
// >

//           <button
//             className="lg:hidden absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
//             onClick={toggleMenu}
//             aria-label="Close menu"
//           >
//             &times;
//           </button>
//           <ul className="flex  flex-col md:flex-row md:items-center font-medium list-none justify-center md:h-full p-10 md:p-0 space-y-8 md:space-y-0 md:space-x-6 text-2xl md:text-base">
//             <li className=" md:mx-2 " onClick={() => setMenuOpen(false)}>
//               {onlineStatus ? "Online : 🟢" : "Offline : 🔴"}
//             </li>
//             <li className="md:mx-2 cursor-pointer hover:text-green-700 " onClick={() => setMenuOpen(false)}>
//               <Link to="/">Home</Link>
//             </li>
//             <li className="md:mx-2  hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="md:mx-2 hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li className="md:mx-2 hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
//               <Link to="/grocery">Grocery</Link>
//             </li>
//             <li className="md:mx-2 hover:text-green-700 cursor-pointer" onClick={() => setMenuOpen(false)}>
//               <Link to="/cart">Cart</Link>
//             </li>
//             <li className="md:mx-2">
//               <button
//                 className="login bg-white  font-semibold  text-green-700  "
//                 onClick={() => {
//                   btnValue === "Login" ? setbtnValue("Logout") : setbtnValue("Login");
//                   setMenuOpen(false);
//                 }}
//               >
//                 {btnValue}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


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
