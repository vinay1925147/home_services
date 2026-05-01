import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);
  console.log(doctors);

  return (
    // <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
    //     <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
    //     <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
    //     <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
    //         {doctors.slice(0, 10).map((item, index) => (
    //             <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
    //                 <img className='bg-[#EAEFFF]' src={item.image} alt="" />
    //                 <div className='p-4'>
    //                     <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
    //                         <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
    //                     </div>
    //                     <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
    //                     <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    //     <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    // </div>

    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Popular Home Services
      </h1>

      <p className="sm:w-1/2 text-center text-sm text-gray-500 leading-6">
        Browse our trusted professionals for plumbing, electrician, AC repair,
        cleaning, carpenter, beauty and many more doorstep services.
      </p>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => {
          // Dummy Rating Variable
          const rating = (4 + Math.random()).toFixed(1); // 4.0 to 5.0

          return (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-52 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Status */}
                <div
                  className={`flex items-center gap-2 text-sm mb-2 ${
                    item.available ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></span>

                  <p>{item.available ? "Available Now" : "Unavailable"}</p>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {item.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                
                {/* Keep Current Speciality */}
                  <p className="text-sm text-gray-500 mt-1">
                    {item.speciality}
                  </p>
                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-600">({rating})</span>
                </div>
  
                {/* Price */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    ₹{item.fees}
                  </span>

                  <button className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Book
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <button
        onClick={() => {
          navigate("/providers");
          scrollTo(0, 0);
        }}
        className="mt-10 px-10 py-3 rounded-full bg-primary text-white hover:scale-105 transition duration-300 shadow-md"
      >
        View All Services
      </button>
    </div>
  );
};

export default TopDoctors;
