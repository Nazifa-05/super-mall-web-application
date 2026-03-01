import React from "react";
import sneakersImg from "../assets/images/products/sneakers.AVIF";
import sandalsImg from "../assets/images/products/sandals.JPG";
import formalImg from "../assets/images/products/formal-shoes.JPG";
import sportsImg from "../assets/images/products/sports-shoes.AVIF";

const Footwear = () => {
  const footwearItems = [
    {
      id: 1,
      name: "Premium Sneakers",
      price: "₹3,499",
      image: sneakersImg,
    },
    {
      id: 2,
      name: "Comfort Sandals",
      price: "₹1,299",
      image: sandalsImg,
    },
    {
      id: 3,
      name: "Formal Leather Shoes",
      price: "₹4,999",
      image: formalImg,
    },
    {
      id: 4,
      name: "Sports Running Shoes",
      price: "₹2,999",
      image: sportsImg,
    },
  ];

  return (
    <div className="space-y-12">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Footwear Collection 👟
        </h1>
        <p className="text-gray-600 mt-2">
          Step into style and comfort at Super Mall
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footwearItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-[#F25278] font-bold mt-2">
                {item.price}
              </p>

              <button className="mt-4 w-full bg-[#F25278] text-white py-2 rounded-lg font-medium hover:bg-[#e44468] transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Footwear;