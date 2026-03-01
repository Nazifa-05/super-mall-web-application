import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#F25278] text-white flex items-center justify-center font-extrabold">
              SM
            </div>
            <h2 className="text-xl font-extrabold text-gray-800">Super Mall</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Super Mall is a modern shopping destination offering premium brands,
            exciting offers and a seamless shopping experience under one roof.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-600 hover:text-[#F25278]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="text-gray-600 hover:text-[#F25278]"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link to="/shops" className="text-gray-600 hover:text-[#F25278]">
                Shops
              </Link>
            </li>
            <li>
              <Link to="/offers" className="text-gray-600 hover:text-[#F25278]">
                Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="text-gray-600 hover:text-[#F25278]">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-gray-600 hover:text-[#F25278]"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/forgot-password"
                className="text-gray-600 hover:text-[#F25278]"
              >
                Forgot Password
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-[#F25278] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-[#F25278] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-[#F25278] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Super Mall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
