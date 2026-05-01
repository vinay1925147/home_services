// import React, { useContext, useState } from 'react'

// import { assets } from '../assets/assets'
// import logo from '../assets/serv-smaert-images/home.png'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Navbar = () => {

//   const navigate = useNavigate()

//   const [showMenu, setShowMenu] = useState(false)
//   const { token, setToken, userData } = useContext(AppContext)

//   const logout = () => {
//     localStorage.removeItem('token')
//     setToken(false)
//     navigate('/login')
//   }

//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
//       <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={logo} alt="" />
//       <ul className='md:flex items-start gap-5 font-medium hidden'>
//         <NavLink to='/' >
//           <li className='py-1'>HOME</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/providers' >
//           <li className='py-1'>ALL SERVICES</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/about' >
//           <li className='py-1'>ABOUT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to='/contact' >
//           <li className='py-1'>CONTACT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//       </ul>

//       <div className='flex items-center gap-4 '>
//         {
//           token && userData
//             ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={userData.image} alt="" />
//               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
//                   <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                   <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>
//             : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
//         }
//         <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

//         {/* ---- Mobile Menu ---- */}
//         <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//           <div className='flex items-center justify-between px-5 py-6'>
//             <img src={logo} className='w-36' alt="" />
//              {/* <div className="bg-[#1a4d2e] p-2 rounded-lg">
//              className="h-6 w-6 text-white" />
//           </div> */}
//             <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
//           </div>
//           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
//             <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/providers' ><p className='px-4 py-2 rounded full inline-block'>ALL SERVICES</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import logo from "../assets/serv-smaert-images/home.png";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-primary/10 p-2 rounded-xl group-hover:scale-110 transition duration-300">
            <img src={logo} className="w-8 h-8 object-contain" alt="" />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Serv<span className="text-primary">Smart</span>
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <NavLink
            to="/"
            className="hover:text-primary transition duration-300"
          >
            HOME
          </NavLink>

          <NavLink
            to="/providers"
            className="hover:text-primary transition duration-300"
          >
            ALL SERVICES
          </NavLink>

          <NavLink
            to="/about"
            className="hover:text-primary transition duration-300"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-primary transition duration-300"
          >
            CONTACT
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                src={userData.image}
                alt=""
              />

              <img className="w-2.5" src={assets.dropdown_icon} alt="" />

              {/* Dropdown */}
              <div className="absolute top-0 right-0 pt-14 text-sm font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-52 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-3 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-primary cursor-pointer"
                  >
                    My Profile
                  </p>

                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-primary cursor-pointer"
                  >
                    My Appointments
                  </p>

                  <p
                    onClick={logout}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 shadow-md"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />
        </div>

        {/* Mobile Menu */}
        {/* Half Screen Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 ${
            showMenu ? "visible" : "invisible"
          }`}
        >
          {/* Background Overlay */}
          <div
            onClick={() => setShowMenu(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
              showMenu ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Right Side Sheet */}
          <div
            className={`absolute top-0 right-0 h-full w-[78%] sm:w-[380px] bg-white shadow-2xl rounded-l-3xl transition-all duration-500 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Top */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <img src={logo} className="w-7 h-7 object-contain" alt="" />
                </div>

                <h1 className="text-xl font-bold text-gray-800">
                  Serv<span className="text-primary">Smart</span>
                </h1>
              </div>

              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                className="w-6 cursor-pointer hover:rotate-90 transition duration-300"
                alt=""
              />
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-3 px-5 py-6 text-[15px] font-medium text-gray-700">
              <NavLink
                onClick={() => setShowMenu(false)}
                to="/"
                className="px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition duration-300"
              >
                HOME
              </NavLink>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/providers"
                className="px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition duration-300"
              >
                ALL SERVICES
              </NavLink>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/about"
                className="px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition duration-300"
              >
                ABOUT
              </NavLink>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/contact"
                className="px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition duration-300"
              >
                CONTACT
              </NavLink>

              {!token && (
                <button
                  onClick={() => {
                    navigate("/login");
                    setShowMenu(false);
                  }}
                  className="mt-4 bg-primary text-white py-3 rounded-xl shadow-md hover:scale-105 transition duration-300"
                >
                  Create Account
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
