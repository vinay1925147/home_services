
import contect_logo from "../assets/serv-smaert-images/contect-carpenter.jpg";

const Contact = () => {
  

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="text-center pt-10 pb-6">
        <p className="text-3xl font-light text-gray-500 tracking-wide">
          CONTACT <span className="font-bold text-gray-800">US</span>
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Main Section */}
      <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-24">

        {/* Left Image */}
        <div className="h-full">
          <img
            src={contect_logo}
            alt="Contact ServSmart"
            className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 h-full">

          {/* Office Card */}
          <div className="flex-1 bg-white border rounded-2xl shadow-md p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
              Our Office
            </h3>

            <p className="text-gray-600 leading-8 text-[15px]">
              📍 Puren-Pura, Near SATI Campus
              <br />
              Vidisha (M.P.)
            </p>

          </div>

          {/* Contact Card */}
          <div className="flex-1 bg-white border rounded-2xl shadow-md p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
              Contact Details
            </h3>

            <div className="space-y-6 text-gray-600 text-[15px]">

              <div>
                <p className="font-semibold text-gray-700 mb-1">Vaibhav</p>
                <p>📞 +91 9340925977</p>
                <p>📧 vaibhav123@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700 mb-1">Samyak Jain</p>
                <p>📞 +91 7489652331</p>
                <p>📧 samyakjain342@gmail.com</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;