import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Super Mall Logo"
            className="h-14 w-14 object-contain"
          />
          <h1 className="text-2xl font-extrabold text-red-700 tracking-wide">
            Super Mall
          </h1>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="lg:hidden text-3xl text-red-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0 shadow lg:shadow-none`}
        >
          {/* HOME */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                : "text-gray-600 hover:text-red-600 transition"
            }
          >
            Home
          </NavLink>

          {/* CATEGORIES */}
          <NavLink
            to="/electronics"
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-600 transition"
          >
            Categories
          </NavLink>

          {/* SHOPS */}
          <NavLink
            to="/shops"
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-600 transition"
          >
            Shops
          </NavLink>

          {/* OFFERS */}
          <NavLink
            to="/offers"
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-600 transition"
          >
            Compare
          </NavLink>

          {/* LOGIN */}
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
