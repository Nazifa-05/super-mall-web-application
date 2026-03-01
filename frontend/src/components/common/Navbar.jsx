import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Super Mall Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl font-extrabold text-red-700 tracking-wide">
            Super Mall
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                : "text-gray-600 hover:text-red-600 transition"
            }
          >
            Home
          </NavLink>

          {/* CATEGORIES WITH DROPDOWN */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-red-600 transition">
              <span>Categories</span>
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:rotate-180">
                <svg
                  className="w-3 h-3 text-gray-600 group-hover:text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            {/* SUBMENU */}
            <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink
                to="/electronics"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Electronics
              </NavLink>
              <NavLink
                to="/clothing"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Clothing
              </NavLink>
              <NavLink
                to="/grocery"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Grocery
              </NavLink>
              <NavLink
                to="/footwear"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Footwear
              </NavLink>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-red-600 transition">
              <span>Shops</span>
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:rotate-180">
                <svg
                  className="w-3 h-3 text-gray-600 group-hover:text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            {/* SUBMENU */}
            <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink to="/shops" className="block px-4 py-2 hover:bg-red-50">
                All Shops
              </NavLink>
              <NavLink
                to="/shops/1"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Floor 1
              </NavLink>
              <NavLink
                to="/shops/2"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Floor 2
              </NavLink>
              <NavLink
                to="/shops/3"
                className="block px-4 py-2 hover:bg-red-50"
              >
                Floor 3
              </NavLink>
            </div>
          </div>

          {/* OFFERS */}
          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                : "text-gray-600 hover:text-red-600 transition"
            }
          >
            Offers
          </NavLink>

          {/* COMPARE */}
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                : "text-gray-600 hover:text-red-600 transition"
            }
          >
            Compare
          </NavLink>

          {/* LOGIN BUTTON */}
          <NavLink
            to="/login"
            className="ml-4 bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
