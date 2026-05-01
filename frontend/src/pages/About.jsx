// import React from 'react'
// import about_home from '../assets/serv-smaert-images/About-home.jpg'

// const About = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12'>
//         <img className='w-full md:max-w-[360px]' src={about_home} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to our Service Provider Platform, a trusted and modern solution designed to connect customers with skilled professionals for everyday home and personal services.  In today’s busy world, finding the right professional for home maintenance, repairs, cleaning, beauty care, appliance servicing, and other essential tasks can often be difficult and time-consuming. We aim to solve this problem by bringing verified service providers and customers together on one secure digital platform.</p>
//           <p>Our website helps users easily discover and book experienced professionals for multiple categories of services. Whether you need an electrician for wiring issues, a plumber for leakage repairs, a carpenter for furniture work,  a cleaner for deep home cleaning, our platform ensures that quality help is always just a few clicks away. Customers can browse services, compare options, view provider details, and book appointments according to their preferred date and time.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our Vission is to become the most reliable local service marketplace by creating value for both customers and professionals. We want customers to save time and effort while getting excellent service, and we want providers to grow with dignity, stability, and better income opportunities</p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>EFFICIENCY:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>CONVENIENCE: </b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>PERSONALIZATION:</b>
//           <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About
import about_home from "../assets/serv-smaert-images/About-home.jpg";

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center pt-10 pb-6">
        <p className="text-3xl font-light text-gray-500 tracking-wide">
          ABOUT <span className="font-bold text-gray-800">US</span>
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>

      {/* About Section */}
      <div className="my-12 flex flex-col lg:flex-row gap-10 items-start">
        {/* Image */}

        <div className="text-gray-600 leading-7 text-[15px]">
          <img
            className="w-full lg:w-[420px] rounded-2xl shadow-lg object-cover"
            src={about_home}
            alt="About Service Provider"
          />
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p>
              To become the most reliable local service marketplace by creating
              value for both customers and professionals. We want users to save
              time and receive quality service, while providers grow their
              business with better opportunities.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 text-gray-600 leading-7 text-[15px]">
          <p>
            Welcome to our Service Provider Platform, a modern and trusted
            solution created to connect customers with skilled professionals for
            daily home and personal services. In today’s fast-moving world,
            finding reliable experts for household tasks can be difficult and
            time-consuming.
          </p>

          <p>
            Our platform solves this problem by bringing verified service
            providers and customers together in one secure digital space. From
            electricians and plumbers to carpenters, cleaners, and repair
            experts, users can easily discover and book quality professionals in
            just a few clicks.
          </p>

          <p>
            We focus on trust, convenience, and customer satisfaction. Our goal
            is to make everyday service booking easy, affordable, and stress
            free for everyone.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mt-16 mb-10">
        <p className="text-3xl font-light text-gray-500">
          WHY <span className="font-bold text-gray-800">CHOOSE US</span>
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {/* Card 1 */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300">
          <h3 className="font-bold text-lg mb-3">Convenience</h3>
          <p className="text-sm leading-6">
            Book trusted professionals anytime from your mobile or desktop.
            Quick and easy service booking experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300">
          <h3 className="font-bold text-lg mb-3">Trust & Safety</h3>
          <p className="text-sm leading-6">
            Verified providers, secure platform, and customer reviews help users
            choose reliable professionals with confidence.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300">
          <h3 className="font-bold text-lg mb-3">Time Saving</h3>
          <p className="text-sm leading-6">
            No need to search manually or call many people. Find and hire the
            right service provider instantly.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300">
          <h3 className="font-bold text-lg mb-3">Multiple Services</h3>
          <p className="text-sm leading-6">
            Get plumbing, electrical, cleaning, repairing, beauty, and many
            other services all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
