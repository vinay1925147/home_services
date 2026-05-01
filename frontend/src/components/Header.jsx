// import React from 'react'

// import { assets } from '../assets/assets'

// const Header = () => {
//     return (
//         <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

//             {/* --------- Header Left --------- */}
//             <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//                 <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                     Book Appointment <br />  With Trusted Doctors
//                 </p>
//                 <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                     <img className='w-28' src={assets.group_profiles} alt="" />
//                     <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
//                 </div>
//                 <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                     Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//                 </a>
//             </div>

//             {/* --------- Header Right --------- */}
//             <div className='md:w-1/2 relative'>
//                 <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//             </div>
            
//         </div>
//     )
// }

// export default Header
import React from "react";

const Header = () => {
  return (
    <section
      className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 lg:mx-12 mt-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 md:py-16 gap-10">
        
        {/* ---------- Left Image Section ---------- */}
        {/* <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1770364227473-f1fda1fb4c63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMHNlcnZpY2V8ZW58MHx8MHx8fDI%3D"
            alt="Home Services"
            className="w-[280px] sm:w-[340px] md:w-[420px] rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-105 transition duration-500"
          />
        </div> */}

        {/* ---------- Right Content Section ---------- */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-5 backdrop-blur-md">
            Trusted Home Services Near You
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Book Trusted <br />
            Home Experts <br />
            Instantly
          </h1>

          <p className="text-gray-200 text-sm md:text-base mt-5 max-w-lg leading-7">
            Find verified plumbers, electricians, cleaners, AC technicians,
            carpenters and more. Fast booking, affordable pricing, and reliable
            doorstep service.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="/providers"
              className="bg-white text-primary font-semibold px-7 py-3 rounded-full hover:scale-105 transition duration-300"
            >
              Book Now
            </a>

            <a
              href="/providers"
              className="border border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 text-white">
            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-sm text-gray-300">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">250+</h3>
              <p className="text-sm text-gray-300">Verified Providers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-sm text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;