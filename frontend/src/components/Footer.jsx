import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/serv-smaert-images/home.png";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { pathname } = useLocation();

  // Scroll top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img className="w-14 h-14 object-contain" src={logo} alt="logo" />
              <h2 className="text-2xl font-bold text-gray-800">
                Serv<span className="text-primary">Smart</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-7 text-sm">
              Our platform helps service providers grow their business digitally.
              We connect skilled professionals with customers through secure
              bookings, better visibility, and easy service management tools.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              COMPANY
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">

              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/providers" className="hover:text-primary transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
               <li>
                <Link
                  to="https://home-services-xpiv.vercel.app/"
                  className="hover:text-primary transition"
                >
                  Admin Panel
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              GET IN TOUCH
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm leading-6">
              <li>📞 +91 9770096768</li>
              <li>📧 vinayasati90@gmail.com</li>
              <li>
                📍 Durga Nagar, Near SATI Campus,
                <br />
                Vidisha (M.P.)
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://www.instagram.com/a_s_a_t_i_j_i_90/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition"
              >
                <CiFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/vinay-asati-912527248/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl hover:bg-primary hover:text-white transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-gray-500">
            Copyright © 2026{" "}
            <span className="font-semibold">ServSmart.com</span> - All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;