import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}
        >
          <p
            onClick={() =>
              speciality === "Cleaner"
                ? navigate("/providers")
                : navigate("/providers/Cleaner")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cleaner" ? "bg-[#E2E5FF] text-black " : ""}`}
          >
            Cleaning
          </p>
          <p
            onClick={() =>
              speciality === "Elecrician"
                ? navigate("/providers")
                : navigate("/providers/Elecrician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Elecrician" ? "bg-[#E2E5FF] text-black " : ""}`}
          >
            Electrician
          </p>
          <p
            onClick={() =>
              speciality === "Plumber"
                ? navigate("/providers")
                : navigate("/providers/Plumber")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Plumber" ? "bg-[#E2E5FF] text-black " : ""}`}
          >
            Plumber
          </p>

          <p
            onClick={() =>
              speciality === "Carpenter"
                ? navigate("/providers")
                : navigate("/providers/Carpenter")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Carpenter" ? "bg-[#E2E5FF] text-black " : ""}`}
          >
            Carpenter
          </p>

          <p
            onClick={() =>
              speciality === "Painter"
                ? navigate("/providers")
                : navigate("/providers/Painter")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Painter" ? "bg-[#E2E5FF] text-black " : ""}`}
          >
            Painter
          </p>

          <p
            onClick={() =>
              speciality === "AC Repairs"
                ? navigate("/providers")
                : navigate("/providers/AC Repairs")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "AC Repairs" ? "bg-[#E2E5FF] text-black " : ""}`}
          >
            AC Repair
          </p>
        </div>
        {/* <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6">
          {filterDoc.map((item, index) => {
            // Dummy Rating
            const rating = (4 + Math.random()).toFixed(1);

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
                <div className="w-full h-52 overflow-hidden bg-[#EAEFFF]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Availability */}
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

                  {/* Keep Current Speciality */}
                  <p className="text-sm text-gray-500 mt-1">
                    {item.speciality}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-600">({rating})</span>
                  </div>

                  {/* Price + Button */}
                  <div className="mt-4 flex items-center justify-between">
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
      </div>
    </div>
  );
};

export default Doctors;
