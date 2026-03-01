import React from "react";
import shirtImg from "../assets/images/products/shirt.JPG";
import jeansImg from "../assets/images/products/jeans.AVIF";
import jacketImg from "../assets/images/products/jacket.JPG";
import dressImg from "../assets/images/products/dress.JPG";

const Clothing = () => {
  const products = [
    {
      id: 1,
      name: "Premium Shirt",
      price: "₹1,999",
      image: shirtImg,
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: "₹2,499",
      image: jeansImg,
    },
    {
      id: 3,
      name: "Winter Jacket",
      price: "₹3,999",
      image: jacketImg,
    },
    {
      id: 4,
      name: "Stylish Dress",
      price: "₹2,199",
      image: dressImg,
    },
  ];

  return (
    <div className="space-y-12">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Clothing Collection 
        </h1>
        <p className="text-gray-600 mt-2">
          Discover the latest fashion trends at Super Mall
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>

              <p className="text-[#F25278] font-bold mt-2">
                {product.price}
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

export default Clothing;