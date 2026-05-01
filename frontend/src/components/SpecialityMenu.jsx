import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    // <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
    //     <h1 className='text-3xl font-medium'>Find by Speciality</h1>
    //     <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    //     <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
    //         {specialityData.map((item, index) => (
    //             <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
    //                 <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
    //                 <p>{item.speciality}</p>
    //             </Link>
    //         ))}
    //     </div>
    // </div>
    <div
      id="speciality"
      className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Find Services by Category
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-4 leading-7">
          Choose from trusted home service experts like cleaning, plumbing,
          electrician, AC repair, carpenter and more for fast doorstep support.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-12">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/providers/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 p-5 flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.speciality}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">
              {item.speciality}
            </h3>

            {/* Subtitle
        <p className="text-xs text-gray-500 mt-1">
          Trusted Experts
        </p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
